// Use postman to make the POST request
// Click on Body tab and 'x-www-form-url-encoded' to specify the argument
// You need to send the 'name' argument

const express = require('express');
let fs = require('fs');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.post('/', (req, res) => {
    fs.writeFile('data/storedName.txt', req.body.name, (err) => {
        res.status(201).send();
    });
});

app.get('/', (req, res) => {
    fs.readFile('data/storedName.txt', (err, content) => {
        res.send(`Hello ${content}!`);
    });
});

app.listen(port, () => {
    console.log(`Open http://localhost:${port}`);
});
