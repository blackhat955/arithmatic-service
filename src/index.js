




require('dotenv').config()
const express = require('express');
const cors = require('cors'); 
const { add } = require("./arithmetica");
const app = express();
app.use(cors()); 

if (!process.env.PORT) {
  throw new Error(`Please specify the 
  port number for the HTTP server with the environment variable PORT.`);
}



const port = process.env.PORT; 
app.get('/', (req, res) => {
  res.send('Arithmetic service - last updated 3/4/2022');
}); 

app.get('/', (req, res) => {
    res.send('Arithetic Service - Hello World');
});
app.get('/add/:n/:m', (req, res) => {
  let n = Number(req.params.n);
  let m = Number(req.params.m);
  let sum = add(n, m);
    res.json(sum);
  }); 

  app.get('/mul/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let mlt = mul(n,m);
    res.json(mlt);
})

app.get('/div/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let dv = div(n, m);
    res.json(dv);
})
 
app.listen(port);