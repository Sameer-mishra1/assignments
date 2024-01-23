/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    return new Promise((resolve) => {
        setTimeout(resolve, n * 1000);
    })

}

const n = 5;

wait(n)
    .then(() => {
        console.log(`After waiting for ${n} seconds!`);
    });
    
module.exports = wait;
