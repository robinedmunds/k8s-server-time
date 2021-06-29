const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send({
    api: {
      message: "The express api is responding correctly..."
    }
  })
})

app.listen(port, () => {
  console.log(`Express server running on port ${port} ...`)
})
