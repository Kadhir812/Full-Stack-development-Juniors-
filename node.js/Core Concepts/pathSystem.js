//pathSystem - Core Module - II

const path = require("path");

//basename
//dirname
//extname

const filePath = "D:/ZF/New folder/node.js/fileSystem(Asynchronous).js";

console.log("Base name:", path.basename(filePath));
console.log("Directory name:", path.dirname(filePath));
console.log("Extension name:", path.extname(filePath));

//Directory path of the file

console.log("JoinedPath", __dirname+ '\\file.txt')

// finding the path format according to platform(windows, linux) without mentioning backslash

console.log("Joined path", path.join(__dirname, "powerbi", "verify.py"))

