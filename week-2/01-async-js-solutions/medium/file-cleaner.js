// require fs
const fs = require("fs");

const filePath = 'E:/100x-dev-cohort/assignments/week-2/01-async-js-solutions/medium/file-cleaner-file.txt'


fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.log("Error reading the file: ", err);
        return;
    }
    
    const cleanedData = data.split(' ').filter(word => word !== '').join(' ');

    // writing the modified text
    fs.writeFile(filePath, cleanedData, 'utf-8', (writeErr) => {
        if (writeErr) {
            console.log("Error writing to the file: ", writeErr);
        }
        else {
            console.log("File content successfully cleaned up and updated!")
        }
    })

})