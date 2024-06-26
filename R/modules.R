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
module.nav = function(label, url) {
  links = lapply(seq_along(label), \(i) list(label = label[i], url = url[i]))
  vw(nav = links, type = 'module')
}

#' Adds gene list module to dashboard
#'
#' @param collection A list where each element is a vector of genes, where the elements should be named.
#' @examples
#'  module.genelist(list(housekeeping = c('ALBUMIN', 'GAPDH'), special = c('VHL', 'IL6R')))
#' @export
module.genelist = function(collection, enrichment=NULL, drill=c()) {
  if (is.null(enrichment)) {
    vw(`gene-list`=
      list(
        genelist = collection,
        drill = drill
      ),
      type = 'module'
    )
  }
  else {
    vw(`gene-list`=
      list(
        genelist = collection,
        enrichment = enrichment |> as.list(),
        drill = drill
      ),
     type = 'module'
    )
  }
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

#' @export
module.about = function(fields, text) {
  res = list()
  for (i in seq_along(fields)) {
    res[[i]] = list(
      field = unbox(fields[i]),
      text = unbox(text[i])
    )
  }
  vw(about=res, type = 'module')
}
