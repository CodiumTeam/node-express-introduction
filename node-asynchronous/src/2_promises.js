// First solution
let promise = new Promise((resolve, reject) => {
   setTimeout(resolve, 1000);
});

promise.then(() => console.log('Hello world'));

// Second solution
let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello world'), 1000);
});

secondPromise.then((message) => console.log(message));
