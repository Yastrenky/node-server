const express= require("express")
const app = express()
const path = require("path")
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname)))
app.use(bodyParser.urlencoded({
  extended: false
}));



app.get('/', function(req , res){
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/tribute', function(req , res){
  res.sendFile(path.join(__dirname, 'tribute','index.html'))
})
app.get('/shout/:words',(req,res) =>{
  res.send(req.parms.words.toUpperCase())
})

app.post('/form', (req,res)=>{
  res.send(req.body.first_name.toUpperCase()+ " SUCKS!")
})
///start server   node server.js
///stop server     ctrl+c
app.listen(8080, function(){
  console.log('Listening on port 8080...');
})
