const express = require("express")
const app = express()
const cors = require("cors")
const staticResponse = require("./staticResponse")
const PORT = process.env.PORT || 3000

app.use(cors())

app.get("/", (req, res) => {
  const datetime = new Date()
  const combine = {data: {...staticResponse, datetime}}
  res.send(combine)
})

app.listen(PORT, () => {
  console.log(`Express server running on PORT ${PORT} ...`)
})
