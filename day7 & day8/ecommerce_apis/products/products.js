const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "data.json"); // here .(dot) represent current directory // __dirname -- called global variable means

const readFile = ()=>{
  const filedata = fs.readFileSync(filepath, "utf-8");
  return JSON.parse(filedata);
};
// console.log(readFile());


// 09-07-2025
// creating a function
const writeFile = (data)=>{
  fs.writeFileSync(filepath, JSON.stringify(data))
}


module.exports = { readFile, writeFile }