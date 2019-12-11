const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()

mongoose.connect("mongodb://localhost:27017/hoteis", { useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error"))

db.once("open", function(){
    console.log("Conexão realizada! :)")
})

const hoteis = require("./routes/hoteisRoute")

app.use(function(req,res,next){
    res.header("Acess-Control-Allow-Origin", "*")
    res.header("Acess-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept")
    next()
})

app.use(express.static("public"));

app.use(bodyParser.json());

app.use("/hoteis", hoteis)

module.exports = app