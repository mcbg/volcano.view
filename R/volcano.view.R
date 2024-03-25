
vw = function(..., type) {
  structure(list(...), class = c('vw', 'list'), type = type)
}

#' @importFrom jsonlite unbox
#' @export
volcano.view = function(data, x, y, id, ...) {
  res = vw(
    view = unbox('volcano'),
    payload = list(
      data = as.list(data),
      config = list(x = x, y = y, name = id) |> lapply(unbox)
    ),
    type = 'main'
  )
}

#' @export
module.drill = function(...) {
  vw(drill = list(...), type = 'module')
}

#' @export
module.details = function(...) {
  vw(details = list(...), type = 'module')
}

#' @export
module.drillplots = function(cols) {
  vw(`drill-plots`= cols, type = 'module')
}

#' @export
module.enrichment = function(data, drill=c()) {
  vw(enrichment=list(data=data, drill = drill), type = 'module')
}

#' @param collection A list where each element is a vector of genes. The elements should be named.
#' @example module.genelist(list(housekeeping = c('ALBUMIN', 'GAPDH'), special = c('VHL', 'IL6R')))
#' @export
module.genelist = function(collection) {
  vw(`gene-list`=list(genelist=genelists), type = 'module')
}

#' @export
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


#' @export
"+.vw" = \(x,y) {
  if ('vw-collect' %in% class(x)) {
    c(x, list(y))
  }
  else {
    structure(list(x, y), class = c('vw-collect', 'vw', 'list'))
  }
}
