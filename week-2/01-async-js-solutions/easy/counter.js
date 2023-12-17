// with setInterval

// let counter = 0;

// function increment() {
//     counter++;
//     console.log(counter);
// }

// setInterval(increment, 1000);

// With setTimeout

let counter = 0;

function increment() {
    counter++;
    console.log(counter);

    setTimeout(increment, 1000);
}


increment();