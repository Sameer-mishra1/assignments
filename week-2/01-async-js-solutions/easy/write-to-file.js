const fs = require('fs');

const filePath = 'E:/100x-dev-cohort/assignments/week-2/01-async-js-solutions/easy/write-here.txt';

const text = "Cutie, how you doing?"


// Practiced with writeFile, just wanted to complete my sentence, so tried my hands on appendFile
fs.appendFile(filePath, text, 'utf-8', (err) => {
    if (err) {
        console.error("Error writing to file: ", err);
        return;
    }
    console.log("Content has been written successfully!");
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error("Sorry, some technical glitch.")
        }
        console.log(data);
    })
});