const express = require("express")
const app = express()
const cors = require("cors")
const staticResponse = require("./staticResponse")
app.use(cors())

const port = 3000

app.get("/", (req, res) => {
  const datetime = new Date()
  const combine = {data: {...staticResponse, datetime}}
  res.send(combine)
})

app.listen(port, () => {
  console.log(`Express server running on port ${port} ...`)
})
