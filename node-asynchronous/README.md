# Introduction to Node Asynchronous

## Goal
- Start to playing with asynchronous calls
- Learn [Promises](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise)

## Mini katas

#### 1. Hello world asynchronous with callback
- Write a function that execute a [_`callback`_](https://developer.mozilla.org/es/docs/Glossary/Callback_function) after 1 second.
- To validate the usage use a simple callback that says "Hello World!"

Tip: remember [_`setTimeout`_](https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setTimeout)


#### 2. Hello world asynchronous with promises
- Write a program using promises that say "Hello world!" after 1 second, when the promise is resolved.

Tips:
 - remember _`resolve`_
 - remember [_`then`_](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/then)

#### 3. Failing Hello world asynchronous
- Write a program using promises that say "The end of the world!" after 1 second, when the promise is rejected.

Tips:
 - remember _`reject`_
 - remember [_`catch`_](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/then)

#### 4. Play with fs node module in asynchronous way
     
 Use fs to read rates.json file.
 
 - Create a node app that returns the current change from EURO to a currency introduced as argument
 - Raise an Error when we do not have exchange rate for the introduced currency and show a message saying "Sorry, we don't support the currency XXX"
 
Tip: Investigate _`fs.readFile`_ and do not use _`fs.readFileSync`_
 
#### 5. Async / await

- Transform the following code to use _`async`_ / _`await`_ instead of promises

```javascript
function delayedString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello world'), 1000);
    });
}

function logDelayed() {
    delayedString()
    .then((message) => console.log(message));
}

logDelayed();
```

Tip: Documentation of [async / await](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona)

#### 6. HTTP request

Install [request-promise](https://github.com/request/request-promise#installation) to make http requests receiving a promise.

- Create a program that receives an URL as argument, retrieves their content and shows the first 200 characters on the console. 

#### 7. Asynchronous test
Write a test to ensure the following function returns the string _Hello world_ after a second

```javascript
function delayedString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello world'), 1000);
    });
}
```

Tip: Remember to install [mocha](https://mochajs.org) and [chai](https://www.chaijs.com).
## Author
[Luis Rovirosa](https://twitter.com/luisrovirosa)
