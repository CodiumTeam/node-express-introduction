const yargs = require('yargs');

const arguments = yargs
    .usage('Usage: node $0 --name [name]')
    .demandOption(['name'])
    .argv;

console.log('Hello ' + arguments.name + '!');
