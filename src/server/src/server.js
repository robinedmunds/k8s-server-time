const express = require("express")
const app = express()
const port = 3000
const staticResponse = require("./staticResponse")

app.get("/", (req, res) => {
  res.send(staticResponse)
})

app.listen(port, () => {
  console.log(`Express server running on port ${port} ...`)
})
