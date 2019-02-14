// Access to http://localhost:3000/

const express = require('express');
let fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    fs.readFile('data/storedName.txt', (err, content) => {
        res.send(`Hello ${content}!`);
    });
});

app.listen(port, () => {
    console.log(`Open http://localhost:${port}`);
});
