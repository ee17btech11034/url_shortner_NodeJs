const fs = require("fs")
const os = require("os")

console.log("1.....")

// Blocking request
const blocking = fs.writeFileSync("./text.txt", "Hello World");
console.log(blocking) //It will be undefined as it does not return anything but we can see this with read property

console.log("2.....");

// Non-Blocking
fs.writeFile("./text2.txt", "Hello World", (err, result)=>{
    console.log("non-blocking")
});

console.log("3.....");
console.log("my machine has ", os.cpus().length, " cpus.")