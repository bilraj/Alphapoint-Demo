const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const os = require('os');

const app = express();
app.use(bodyParser.json());
app.use(cors);

data = JSON.stringify({
    'loggedIn': true
})

const options = {
    hostname: 'localhost',
    port: '3000',
    path: '/api/validate',
    method: 'POST',
    url: 'http://127.0.0.1:3000'
}

const req = http.request(options, (res) => {
    console.log("RESPONSE!");
})

req.write(data)
req.end();

// http.post('/api/validate', (req, res) => {
//     console.log("Got request!  " + JSON.stringify(req));
// })

app.listen(3001, (req) => {
    console.log("Started server on port 3001");
})

app.get('/api/validate', (req, res) => {
    res.send("Hello");
})
