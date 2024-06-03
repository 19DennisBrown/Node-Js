
const express = require("express")
const dotenv =  require("dotenv").config()
const app = express()


const port = process.env.PORT
app.use(express.json()) //middleware for accepting req body
app.use("/api/contacts", require("./routes/contactRoutes"))

app.listen(port, ()=>{
  console.log(`Server running at port number ${port}`)
})

