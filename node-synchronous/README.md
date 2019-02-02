# Node Synchronous

## Goal
- Start to playing with node
- Familiarize with some useful libraries

## Mini katas

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


#### Hello world 

- Create a program that shows "Hello world!" on the [console](https://nodejs.org/api/console.html)

#### Hello your name
    
- Create a program that shows, for example, "Hello Luis!" on the console

Tip: Investigate the variable _`process.argv`_

#### Play with _yargs_ library

Install the [_`yargs`_](https://yargs.js.org/) library to process the input

- Create a node app that has a help option to learn how to use the app
- Create a node app that can handle the [named parameters](https://en.wikipedia.org/wiki/Named_parameter)

#### Play with _fs_ node module

Use [_`fs`_](https://nodejs.org/api/fs.html) to read `rates.json` file.

- Create a node app that returns the current change from EURO to a currency introduced as argument   
- When we do not have exchange rate for the introduced currency show a message saying "Sorry, we don't support the currency XXX"
 
Tips: Investigate _`fs.readFileSync`_


#### Play with arrays and functional programming

Use [_`array`_](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array) functions of JS interact with sets of data.

- Create a node app that returns the name of the currencies that receive less than 1 unit for each €
- Create a node app that returns the name of the currencies and how many € do you need to get 1 unit of that currencies
