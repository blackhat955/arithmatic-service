const express = require ('express');
const cors = require ('cors');
const app = express();
app.use(cors());
const port = 3000;
app.get('/', (req, res) => {
    res.send('Arithetic Service - Hello World');
});

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = n + m;
    res.json(sum);
})

// app.get('/add/:n/:m', (req, res) => {
//     let n = Number(req.params.n);
//     let m = Number(req.params.m);
//     let sb = sub(n,m);
//     res.json(sb);
// })

// app.get('/add/:n/:m', (req, res) => {
//     let n = Number(req.params.n);
//     let m = Number(req.params.m);
//     let mlt = mul(n,m);
//     res.json(mlt);
// })

// app.get('/add/:n/:m', (req, res) => {
//     let n = Number(req.params.n);
//     let m = Number(req.params.m);
//     let dv = div(n, m);
//     res.json(dv);
// })

app.listen(port);