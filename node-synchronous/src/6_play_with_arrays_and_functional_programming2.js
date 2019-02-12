const fs = require('fs');

const rates = JSON.parse(fs.readFileSync('./rates_as_array.json').toString());

rates.map((rate) => {
    let numberOfEurosNeeded = 1 / rate.conversion;
    return rate.currency + ': ' + numberOfEurosNeeded;
}).forEach((output) => {
    console.log(output);
});


