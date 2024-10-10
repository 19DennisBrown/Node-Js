
const express = require("express")
const errHandler = require("./middleware/errorHandler")
const dotenv =  require("dotenv").config()
const app = express()
const port = process.env.PORT


app.use(express.json()) //middleware for accepting req body
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use(errHandler)

app.listen(port, ()=>{
  console.log(`Port ${port} is hosting the server`)
})

