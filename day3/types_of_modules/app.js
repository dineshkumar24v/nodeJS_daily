// // built in modules 
// const http = require("http");

//   http.createServer((request, response)=>{

//     // The response.writeHead() method in Node.js is used to send a 
//     // response header to an incoming HTTP request. 
//     response.writeHead(400, {
//       "content-type": "application/json",
//     });

//     response.write("hai hello");
    
//     response.end();
//   })
//   .listen(3000,()=>{   // run and see the output in server http://localhost:3000/
//     console.log("server is running")
//   })


// MySQL -- default port num : 3306


// custom modules 

//  
// console.log("recipe", recipes);  // recipe [ 'chicken', 'egg puff', 'paneer' ]

// const {recipes, getRecipes} = require("./recipies");
// // console.log(require("./recipies"))  // you get data in key value pairs...
// console.log("recipe", getRecipes()); 
// console.log("data", recipes)


// now by alias names
// const { dataRecipes, getRecs} = require("./recipies");
// console.log("recipe:", dataRecipes); 
// console.log("data:", getRecs());




// ES6 Modules
// import data, {user} from "./recipies.js";
// console.log(data());
// console.log(user());



// 3rd party modules
// npm i colors -- to install colors to the terminal outputs...
// npm i colors-- to install colors 
//npm uninstall colors -- to uninstall those 3rd party module...

// import colors from "colors";
// console.log("hello".blue)
// console.log(colors.yellow("hai"));
// console.log(colors.red("iam an error"))
// console.log(colors.rainbow("iam an error"))

// // to change the background
// console.log(colors.bgYellow("iam an error"))


// now let us do it with commonjs modules that is require() method
// const a = require("colors");
// console.log(a.blue("hiiiiiiii"))
// console.log(a.yellow("hiiiiiiii"))
// console.log(a.bgRed("iam an error"))



//  now uuid -- a 3rd party module... to create a unique id

// so now in commonjs -- so use require() method

// const id = require("uuid");
// console.log(id.v4()); 

//  now using ES6 modules -- import , export

import {v4} from "uuid"; // named exoprt
console.log(v4())

 
