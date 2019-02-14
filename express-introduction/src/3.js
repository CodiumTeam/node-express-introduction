// Access to http://localhost:3000/

const express = require('express');
const app = express();
const port = 3000;

app.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}!`);
});

app.listen(port, () => {
    console.log(`Open http://localhost:${port}/Luis`);
});
