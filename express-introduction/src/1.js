// Access to http://localhost:3000/
// To run the code use node src/1.js or nodemon src/1.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Open http://localhost:${port}`);
});
