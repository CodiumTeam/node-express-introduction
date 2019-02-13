// First solution
function waitOneSecond(callback) {
    setTimeout(callback, 1000);
}
waitOneSecond(() => console.log('Hello world!'));

// Second solution
function alternativeWaitOneSecond(callback){
    setTimeout(() => {
        callback();
    }, 1000);
}
alternativeWaitOneSecond(() => console.log('Hello world!'));
