const fs = require('fs');

const filePath = 'E:/100x-dev-cohort/assignments/week-2/01-async-js/easy/3-read-from-file.md';

fs.readFile(filePath, 'utf-8', (err,data) => {
    if (err) {
        console.error("Error reading file: ", err);
        return;
    }

    
    console.log('File content: ', data);

    for (let i = 0; i < 10000000000000; i++) {
        i += 1;
    }
});