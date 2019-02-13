// Run the exercise with:
// node src/3_failing_promise.js

// First solution
let promise = new Promise((resolve, reject) => {
    setTimeout(reject, 1000);
});

promise.catch(() => console.log('Hello world'));

// Second solution
let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject('Hello world'), 1000);
});

secondPromise.catch((message) => console.log(message));
