const fs = require("fs")


// fs.writeFileSync('./test.txt', 'Hello, world') 
// This was a synchronous function.

// Async
//fs.writeFile('./test.txt', 'Hello', (err) => {})


// --- Reading file
// fs.readFile('./test.txt', "utf-8" , (err, data) => {})
// console.log(result)

// const result = fs.readFileSync('./test.txt', 'utf-8')
// console.log(result)

// --------> Append file 
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./test.txt", `Hey There\n`);
fs.cpSync("./test.txt", "./copy.txt");

fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./test.txt"));
