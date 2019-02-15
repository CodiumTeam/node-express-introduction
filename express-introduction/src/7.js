const express = require('express');
let fs = require('fs');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    let requestInformation = new Date().toISOString() + ': ' + req.url + '\n';
    fs.appendFile('requests.log', requestInformation, () => {
       next();
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Open http://localhost:${port}`);
});
