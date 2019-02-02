# Node Asynchronous

## Goal
- Start to playing with asynchronous calls
- Learn [Promises](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise)

## Mini katas

#### 1. Hello world asynchronous with callback
- Write a program using a [_`callback`_](https://developer.mozilla.org/es/docs/Glossary/Callback_function) that say "Hello world!" after 1 second.

Tip: remember [_`setTimeout`_](https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setTimeout)


#### 2. Hello world asynchronous with promises
- Write a program using promises that say "Hello world!" after 1 second, when the promise is resolved.

Tip: remember _`resolve`_

Tip: remember [_`then`_](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/then)

#### 3. Failing Hello world asynchronous
- Write a program using promises that say "The end of the world!" after 1 second, when the promise is rejected.

Tip: remember _`reject`_

Tip: remember [_`catch`_](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/then)

#### 4. Play with fs node module in asynchronous way
     
 Use fs to read rates.json file.
 
 - Create a node app that returns the current change from EURO to a currency introduced as argument
 - Raise an Error when we do not have exchange rate for the introduced currency and show a message saying "Sorry, we don't support the currency XXX"
 
 Tips: Investigate _`fs.readFile`_ and do not use _`fs.readFileSync`_
 
#### 5. Async / await

- Transform the code of _Play with fs node module in asynchronous way_ to use _`async`_ / _`await`_ instead of promises

Tip: Documentation of [async / await](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona)

#### 6. HTTP request

Install [request-promise](https://github.com/request/request-promise#installation) to make http requests receiving a promise.

- Create a program that receives an URL as argument, retrieves their content and shows the first 200 characters on the console. 

## Author
[Luis Rovirosa](https://twitter.com/luisrovirosa)
