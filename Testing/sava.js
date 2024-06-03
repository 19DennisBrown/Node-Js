
const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use("/api/", require("./routes/routes"))

app.listen(port, ()=>{
  console.log(`port ${port} is running`)
})