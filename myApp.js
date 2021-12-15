var express = require('express');
var app = express();
require('dotenv').config();

console.log(process.env.MESSAGE_STYLE);
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))

const mySecret = process.env.MESSAGE_STYLE
// function logger(req, res, next) {
//   const method = req.method;
//   const path = req.path;
//   const ip = req.ip;

//   console.log(`${method} ${path} - ${ip}`);
//   next()
// }
// app.use(logger);
app.use('/public',express.static(__dirname + '/public'))
const filePath = __dirname + '/views/index.html';


let response = ''
if (mySecret === "uppercase") {
  response = "Hello json".toUpperCase();
} else {
  response = "Hello json";
}

// app.post('/name', function(req, res){
//   // console.log(req.body.toString())
//   const name = req.body.first +' '+ req.body.last;  
//   res.json({"name":name})
// })

// app.get('/name', (req, res) => {
//   const name = req.query.first +' '+ req.query.last;
//   console.log(req.query, name)
//   res.json({"name":name})
// })

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);

// app.get('/:word/echo',function(req, res){
//   res.json({'echo':req.params.word})
// })

app.get('/json', function(req, res){
  console.log(mySecret)
  res.send({message: response});
})

app.get('/', function(req, res){
  res.sendFile(filePath)
})

// app.get("/",function(req, res){
//   res.send('Hello Express');
// })
































 module.exports = app;


































 module.exports = app;
