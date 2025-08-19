//Node.js - Core Modules


const fs = require("fs");

 //Synchronous fileWrite

fs.writeFileSync("file.txt", "Hello World")
console.log("File written successfully")

//Synchronous fileRead

const data = fs.readFileSync("file.txt", "utf8");
console.log("File read successfully", data)
