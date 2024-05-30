

vw = function(..., type) {
  structure(list(...), class = c('vw', 'list'), type = type)
}

#' @importFrom jsonlite unbox
#' @export
volcano.view = function(data, x, y, id=NULL, ...) {
  # handle id
  if (is.null(id)) {
    id = '__id__'
    data[[id]] = seq_len(nrow(data)) |> as.character()
  }

  if (is.numeric(data[[id]])) {
    data[[id]] = data[[id]] |>
      as.character()
  }

  # CHECKS
  if (!(x %in% names(data))) stop("x variable, '", x,"', not in data")
  if (!(y %in% names(data))) stop("y variable, '", y,"', not in data")
  if (!(id %in% names(data))) stop("id variable, '", id,"', not in data")
  lapply(names(list(...)), \(nm) {
    var = list(...)[[nm]]
    if (!(var %in% names(data))) stop(nm, " variable, '", var,"', not in data")
  })

  # RETURN
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
explore = \(ds) {
  ds_view = data.table(ds, rn = as.character(seq_len(nrow(ds))))
  xvar = names(ds)[1]
  yvar = names(ds)[2]
  volcano.view(ds_view, x = xvar, y = yvar, id = 'rn') + module.explore()
}

#' @importFrom httr POST
#' @export
send = \(x) {
  o = to.json(x)
  POST('http://127.0.0.1:8999/api/setState', body = o, encode = 'raw')
}

.get.type = function(x) {
  attributes(x)$type
}


#' @importFrom jsonlite toJSON
#' @export
to.json = function(x) {
  # checks
  if (!('vw' %in% class(x))) stop('x is not of class vw')

  # process
  json = x |> .convert() |> toJSON()
  return(json)
}

#' @export
write.json = function(x, fn) {
  json = to.json(x)
  writeLines(text = json, fn)
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
  if ('vw-collect' %in% class(x) || .get.type(x) == 'main') {
    print(send(x))
  }
  else {
    NextMethod()
  }
}

#' @export
save.website = function(x, path) {
  if (!dir.exists(path)) dir.create(path)

  # process, to json
  template.path = file.path(system.file(package = 'volcano.view'), 'templates/default/')
  template.files = list.files(template.path, full.names = TRUE)

  # copy template files
  file.copy(template.files, path, recursive = TRUE)

  # save json
  json = to.json(x)
  writeLines(json, file.path(path, 'config.json'))
}

#' @export
populate.dashboard = function(path) {
  pkg.path = system.file(package = 'volcano.view')

  # copy files
  files = pkg.path |>
    file.path('client') |>
    list.files(full.names = TRUE)
  files.to.copy = files[basename(files) != 'index.html']
  file.copy(files.to.copy, path, recursive = TRUE)

  # get template
  template = pkg.path |>
    file.path('templates/choose-config/index.html') |>
    readLines()
  insertion.line = grep('\\{%% INSERT CONFIG %%\\}', template)

  # generate html
  config.files = path |> list.files(full.names = TRUE, pattern = '*.json')

  for (fn in config.files) {
    html = template
    html[insertion.line] = paste0('const config = "./', basename(fn), '"')
    fn.html = sub('json$', 'html', fn)
    # save html
    writeLines(html, fn.html)
  }
}
