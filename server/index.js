const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express()
const port = 4444

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve(__dirname, "../build/index.html"), "utf8", (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).send("An error occurred in server side")
    }

    const customSnippet = `
window.myVar = "Hello from server side!!!!"
`

    return res.send(
      data.replace(
        `<script id="inject-code-here"></script>`,
        `<script id="inject-code-here">${customSnippet}</script>`
      )
    )
  })
}

app.disable("etag")
app.use("^/$", serverRenderer)
app.use(express.static(path.resolve(__dirname, "../build"), {
  etag: false
}))
app.listen(port, () => console.log(`Example React SSR listening on port ${port}`))
