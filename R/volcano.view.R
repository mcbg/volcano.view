
vw = function(..., type) {
  structure(list(...), class = c('vw', 'list'), type = type)
}

volcano.view = function(data, ...) {
  res = vw(
    view = jsonlite::unbox('volcano'),
    payload = list(
      data = as.list(data),
      config = list(...) |> lapply(jsonlite::unbox)
    ),
    type = 'main'
  )
}

module.drill = function(...) {
  vw(drill = list(...), type = 'module')
}

module.details = function(...) {
  vw(details = list(...), type = 'module')
}

save = function(filename) {

}

send = \(x) {
  o = x |> .convert()
  httr::POST('http://127.0.0.1:8999/api/setState', body = jsonlite::toJSON(o), encode = 'raw')
}

.convert = function(ll) {
  types = ll |> sapply(\(x) attributes(x)$type)
  main = ll[[which(types == 'main')]]
  modules = unlist(ll[types == 'module'], recursive = FALSE)
  main$payload$modules = modules
  return(main)
}


aa = x |> convert()

library(jsonlite)
list(
  view = unbox('volcano'),
  payload=list(
    useCanvas = TRUE,
    data = ds |> as.list(),
    config=list(x='mpg', y='disp', label='rn') |> lapply(unbox),
    modules=list(
      drill = c('gear')
    )
  )
) |>
  send()


ds = mtcars |> data.table(keep.rownames = TRUE)
list(
  volcano.view(ds, x='mpg', y='disp', label = 'rn'),
  module.drill('mpg', 'disp'),
  module.details('gear', 'disp')
) |> send()

