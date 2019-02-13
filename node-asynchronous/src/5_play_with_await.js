// Run the exercise with:
// node src/5_play_with_await.js

async function delayedString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello world'), 1000);
    });
}

async function logDelayed() {
    const message = await delayedString();
    console.log(message);
}

logDelayed();
