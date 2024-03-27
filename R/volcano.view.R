

vw = function(..., type) {
  structure(list(...), class = c('vw', 'list'), type = type)
}

#' @importFrom jsonlite unbox
#' @export
volcano.view = function(data, x, y, id, ...) {
  vw(
    view = unbox('volcano'),
    payload = list(
      data = as.list(data),
      config = list(x = x, y = y, id = id, ...) |> lapply(unbox)
    ),
    type = 'main'
  )
}

#' @export
module.drill = function(...) {

  vw(drill = c(...), type = 'module')
}

#' @export
module.details = function(...) {
  vw(details = c(...), type = 'module')
}

#' @export
module.drillplots = function(...) {
  vw(`drill-plots`= c(...), type = 'module')
}

#' @export
module.enrichment = function(data, drill=c()) {
  vw(enrichment=list(data=data, drill = drill), type = 'module')
}

#' Adds gene list module to dashboard
#'
#' @param collection A list where each element is a vector of genes, where the elements should be named.
#' @examples
#'  module.genelist(list(housekeeping = c('ALBUMIN', 'GAPDH'), special = c('VHL', 'IL6R')))
#' @export
module.genelist = function(collection) {
  vw(`gene-list`=list(genelist=collection), type = 'module')
}

#' Adds confidence interval to selected point
#'
#' @export
module.ci = function(low, high) {
  vw(`confidence-interval`=list(low = unbox(low), high = unbox(high)), type = 'module')
}

#' @export
send = \(x) {
  o = x |> .convert()
  httr::POST('http://127.0.0.1:8999/api/setState', body = jsonlite::toJSON(o), encode = 'raw')
}

.get.type = function(x) {
  attributes(x)$type
}

.convert = function(ll) {
  if ('vw-collect' %in% class(ll)) {
    types = ll |> sapply(.get.type)
    main = ll[[which(types == 'main')]]
    modules = unlist(ll[types == 'module'], recursive = FALSE)
    main$payload$modules = modules
    return(main)
  }
  else if ('vw' %in% class(ll) & .get.type(ll) == 'main') {
    main = ll
    main$payload$modules = list()
    return(main)
  }
}


#' @export
"+.vw" = function(x,y) {
  if ('vw-collect' %in% class(x)) {
    structure(c(x, list(y)), class = c('vw-collect', 'vw', 'list'))
  }
  else {
    structure(list(x, y), class = c('vw-collect', 'vw', 'list'))
  }
}

#' @export
print.vw = function(x) {
  if ('vw-collect' %in% class(x) | .get.type(x) == 'main') {
    print(send(x))
  }
  else {
    NextMethod()
  }
}
