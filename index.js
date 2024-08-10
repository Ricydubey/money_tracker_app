const express = require("express")
const bodyParser = require("body-parser")
const mongoose =require("mongoose")

const app=express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get("/",(req,res) =>{
    res.send("successfully connected to 3000")

}).listen(3000)
console.log("listen on port 3000")