// Access to http://localhost:3000/

const express = require('express');
var exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/:name', (req, res) => {
    res.render('helloworld', { name : req.params.name });
});

app.listen(port, () => {
    console.log(`Open http://localhost:${port}/Luis`);
});
