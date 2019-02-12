# Introduction to Node Synchronous

## Goal
- Start to playing with node
- Familiarize with some useful libraries

## Setup

#### Install node
Follow the steps described on [Node.js webpage](https://nodejs.org/es/)

#### Setup node project
    npm init

#### Start tracking the changes on GIT    
Don't forget to use the [`.gitignore`](https://git-scm.com/docs/gitignore) file

    git init
    git status
    git add .
    git commit -m "usefull commit message"

## Mini katas

#### 1. Hello world 

- Create a program that shows "Hello world!" on the [console](https://nodejs.org/api/console.html)

#### 2. Hello your name
    
- Create a program that shows, for example, "Hello Luis!" on the console

Tip: Investigate the variable _`process.argv`_

#### 3. Hello world with _yargs_

Install the [_`yargs`_](https://yargs.js.org/) library to process the input with [named parameters](https://en.wikipedia.org/wiki/Named_parameter) 

The command will be used as `node file.js --name Luis`

Tip: [Some examples](https://github.com/yargs/yargs/blob/master/docs/examples.md)

#### 4. Play with _yargs_ library

- Create a node app that has a help option to learn how to use the app

Tip: [Some examples](https://github.com/yargs/yargs/blob/master/docs/examples.md)

#### 5. Play with _fs_ node module

Use [_`fs`_](https://nodejs.org/api/fs.html) to read `rates.json` file.

- Create a node app that returns the current change from EURO to a currency introduced as argument   
- When we do not have exchange rate for the introduced currency show a message saying "Sorry, we don't support the currency XXX"
 
Tips:
 - Investigate _`fs.readFileSync`_
 - Investigate _`JSON.parse`_


#### 6. Play with arrays and functional programming

Use [_`array`_](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array) functions of JS interact with sets of data.

**Important**: Use `rates_as_array.json`
- Create a node app that returns the name of the currencies that receive less than 1 unit for each €
- Create a node app that returns the name of the currencies and how many € do you need to get 1 unit of that currencies

Tips:
 - Investigate [Array.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
 - Investigate [Array.forEach()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
 - Investigate [Array.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map) 

#### 7. Introduction to synchronous tests
Install and use [mocha](https://mochajs.org) to test the code. 

Test the mini katas 5 and 6.

Tip: You will need to create functions and export them in order to be accessible from tests.

## Author
[Luis Rovirosa](https://twitter.com/luisrovirosa)
