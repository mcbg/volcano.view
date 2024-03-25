APIstate <- R6::R6Class('APIstate',
                        public = list(
                          ds = list(),
                          getState = function(x) {
                            return(self$ds)
                          },
                          setState = function(req) {
                            self$ds <- req$body
                          }
                        )
)

# filter
cors_filter <- function(res) {
  res$setHeader("Access-Control-Allow-Origin", "*")
  plumber::forward()
}

#' @importFrom plumber pr
#' @importFrom plumber pr_static
#' @importFrom plumber pr_get
#' @importFrom plumber pr_post
#' @importFrom plumber pr_run
#' @importFrom plumber pr_filter
#' @importFrom plumber serializer_json
#' @export
init_server <- function(port=8999, output_dir = NULL) {
  # state
  api <- APIstate$new()

  client_path <- file.path(system.file(package = 'volcano.view'), 'client')
  #client_path <- 'C:/Users/MZCG/erupt-front/dist'

  if (!is.null(output_dir)) {
    pr() |>
      pr_static('output/', output_dir) |>
      pr_static('/', client_path) |>
      pr_get('/api/getState', handler = api$getState, serializer = serializer_json()) |>
      pr_post('/api/setState', handler = api$setState) |>
      pr_filter('cors', cors_filter) |>
      pr_run(port=port, docs = FALSE)
  }
  else {
    pr() |>
      pr_static('/', client_path) |>
      pr_get('/api/getState', handler = api$getState, serializer = serializer_json()) |>
      pr_post('/api/setState', handler = api$setState) |>
      pr_filter('cors', cors_filter) |>
      pr_run(port=port, docs = FALSE)
  }
}
