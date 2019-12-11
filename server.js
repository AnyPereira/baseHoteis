const app = require("./src/app")
const path= require('path')
const express = require('express')
const port = 3000
// app.use(express.static('doc'))
// app.get('/doc',(req,res)=> res.sendFile(path.join(__dirname + '/doc/index.html')))
app.listen(port, function() {
  console.log(`Conectado a porta ${port}`)
})

