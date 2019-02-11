const fs = require('fs');
const yargs = require('yargs');

const arguments = yargs.usage('Usage: node $0 --currency [currencyName]').
demandOption(['currency']).argv;

const rates = JSON.parse(fs.readFileSync('./rates.json').toString());
const rate = rates[arguments.currency];
const message = rate || `Sorry, we don't support the currency ${arguments.currency}`;
console.log(message);
