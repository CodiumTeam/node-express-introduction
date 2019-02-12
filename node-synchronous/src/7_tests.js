const fs = require('fs');

function getChange(toCurrency) {
    const rates = JSON.parse(fs.readFileSync('./rates.json').toString());
    const rate = rates[toCurrency];
    return rate ||
        `Sorry, we don't support the currency ${toCurrency}`;
}

module.exports = {getChange};
