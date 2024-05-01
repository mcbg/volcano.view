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
module.title = function(title) {
  vw(title = title, type = 'module')
}

#' @export
module.enrichment = function(data, drill=list()) {
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
module.explore = function() {
  vw(explore=list('Yes'), type = 'module')
}
