// const {addition, sub} = require("./calc");

const {data} = require("./data")
   
// console.log(addition(1,2));
// console.log(sub(3,2));

// console.log(data());
  
// const calc = (a,b)=>{
//   return a + b;
// }
// console.log(calc(2, 3))


// const {manageUser} = require("./users");
// const users = () =>{
//   return manageUser({name: "Bharath", email:"bharath@gmail.com"})
// };

// console.log(users());






// let us see one http module -- which is a built-in module
//  we use http module to create a server...
// we need to mention what to do after starting server -- so take a call back function and its has 2 parameters --
//  1. request  2. response

// 1.request -- means which we send
// 2. response --- means which returned by server

// http.createServer() -- means it will create a server

// next listen the server -- i.e., on which port-- this listen takes a callback function


// the problem is when we modify the code it wont update and restart the server -- so we need to stop the server and restart it.. after modifying the code  --- so this method we use in production environment

// but in development environment -- we need to test the code right so we want to run the server with updated code --- so here comes a node package to make this possible without again starting the server it automatically updates the server -----ie., 
// npm i nodemon
// nodemon --- is a third party package -- which restarts the server on its own with the updated changes...

//  than make this changes in scripts of package.json file ------  "dev": "nodemon index.js"


// next installed the axios -- to call an api


const http = require("http");
const axios = require("axios"); //  axios is a third party module to call an api

http.createServer((request, response)=>{ 
  axios.get("https://dummyjson.com/products").then((res)=>{
    response.write(JSON.stringify(res.data));  // write method in node to write a code 
    // which accepts only in string format...
    response.end();   // to end the server 
  })
  
}).listen(8080, ()=>{
  console.log("server started");
});






