// Run the exercise with:
// node src/4_play_with_fs_async.js GBP

const fs = require('fs');

const currency = process.argv[2];

fs.readFile('./rates.json', (err, content) => {
    const rates = JSON.parse(content);
    const rate = rates[currency];
    const message = rate || `Sorry, we don't support the currency ${arguments.currency}`;
    console.log(message);
});
