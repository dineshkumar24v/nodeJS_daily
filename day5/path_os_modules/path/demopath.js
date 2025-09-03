const fs = require("fs");
const path = require("path");


// //  console.log(path); // returns all methods in path module


// //basename:  it returns the file names whether it is present or not
//  console.log(path.basename("data/users/user.txt"))  // user.txt

// //dirname:  it returns the file location i.e., the folder with which it is present
// console.log(path.dirname("data/users/file.txt"))  // data/users

// // join method:
// // it returns the file path -- that is compatible to any OS i.e.,
// //  / forward slash for windows and \ backward slash for Ubuntu/ Linux
// console.log(path.join("join", "users", "file.txt"));   // join\users\file.txt


// //join(): to know the extension of the file we use extname
// console.log(path.extname("join/users/file.txt"))   // .txt


// //parse():   parse method return an object
// console.log(path.parse("data/file.txt"));  
// // output:   { root: '', dir: 'data', base: 'file.txt', ext: '.txt', name: 'file' }
// // here base = filename.ext


// // resolve mehod: it returns the absolute path i.e., the entire path of the file present

// console.log(path.resolve("data/file.txt")) 
// // output:  E:\10k coders 32R\Node JS\day5 05-07-2025\path_os_modules\path\data\file.txt



//  using fs module

// console.log(path.resolve()) // logs the absolute path of the current working directory.

// const filepath = path.join(__dirname,"..","demo","user.txt"); // constructs a relative file path.
// console.log(filepath)

// // fs.readFile() reads the content of user.txt asynchronously and logs it.
// fs.readFile(filepath, "utf-8", (err, data)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log(data);
// }) 



// os Module:


