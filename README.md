# Summary
The R package volcano.view creates fast dashboards and offers functionality for navigating and interpreting results from differential expression analysis.

# Demo
[Demo using Roux-en-Y Gastric Bypass SomaScan data](https://storage.googleapis.com/volcano-view-demo/index.html)

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
