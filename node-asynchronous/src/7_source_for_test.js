function delayedString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello world'), 1000);
    });
}

module.exports = delayedString;
