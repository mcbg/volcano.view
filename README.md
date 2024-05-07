# Summary
The R package volcano.view creates fast dashboards and offers functionality for navigating and interpreting results from differential expression analysis.

# Install

```
devtools::install_github('mcbg/volcano.view')
```

# Example code
Run server in background
```
volcano.view::init_server()
```

Create dashboard
```
library(volcano.view)

iris$id = seq_len(nrow(iris)) |> as.character()
volcano.view(
  iris,
  x = 'Sepal.Width',
  y = 'Sepal.Length',
  id = 'id',
  colour = 'Species'
) +
  module.drill('Species')
```
