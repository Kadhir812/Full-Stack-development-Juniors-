const fs = require("fs");


//Asynchronous fileWrite

fs.writeFile("file.txt", "Hello World", (err) => {
    if (err) throw err;
    console.log("File written successfully");


//Asynchronous fileRead

fs.readFile("file.txt", "utf8", (err, data) => {
    console.log("File read successfully", data);
})

});

console.log("File processing")