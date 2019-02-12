const fs = require('fs');

const rates = JSON.parse(fs.readFileSync('./rates_as_array.json').toString());

const expensiveRates = rates.filter((rate) => {
    return rate.conversion < 1;
});

expensiveRates.forEach((rate) => {
    console.log(rate.currency);
});


