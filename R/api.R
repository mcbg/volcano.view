
#' @import R6
APIstate <- R6::R6Class('APIstate',
  public = list(
    state = structure('{}', class = 'json'), # saved json
    getState = function(x) {
      return(self$state)
    },
    setState = function(req) {
      self$state <- structure(rawToChar(req$bodyRaw), class = 'json')
    }
  )
)
# filter
cors_filter <- function(res) {
  res$setHeader("Access-Control-Allow-Origin", "*")
  plumber::forward()
}

#' @importFrom plumber serializer_content_type
#' @importFrom plumber pr
#' @importFrom plumber pr_static
#' @importFrom plumber pr_get
#' @importFrom plumber pr_post
#' @importFrom plumber pr_run
#' @importFrom plumber pr_filter
#' @export
init_server <- function(
    port=8999,
    client_path = file.path(system.file(package = 'volcano.view'), 'client'),
    output_dir = NULL) {

  # state
  api = APIstate$new()
  serialize_json_from_string = serializer_content_type(type = 'application/json')

  #client_path <- 'C:/Users/MZCG/erupt-front/dist'
  pipeline = \(x) x |>
      pr_static('/', client_path) |>
      pr_get('/api/getState', handler = api$getState, serializer = serialize_json_from_string) |>
      pr_post('/api/setState', handler = api$setState) |>
      pr_filter('cors', cors_filter) |>
      pr_run(port=port, docs = FALSE)

  if (!is.null(output_dir)) {
    pr() |>
      pr_static('output/', output_dir) |>
      pipeline()
  }
  else {
    pr() |>
      pipeline()
  }
}
