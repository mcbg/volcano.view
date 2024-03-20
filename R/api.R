library(plumber)
path = 'results'
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

#' @export
init_server <- function() {
  # state
  api <- APIstate$new()

  #client_path <- file.path(system.file(package = 'erupt'), 'client')
  client_path <- 'C:/Users/MZCG/erupt-front/dist'

  # plumber
  pr() %>%
    pr_static('/', client_path) %>%
    pr_get('/api/getState', handler = api$getState, serializer = serializer_json()) %>%
    pr_post('/api/setState', handler = api$setState) %>%
    pr_get('/api/viewState', handler = \(req)
           list(view=jsonlite::unbox('table'), data=as.list(ds)),
           serializer = serializer_json()) %>%
    pr_filter('cors', cors_filter) %>%
    pr_run(port=8999, docs = FALSE)
}
