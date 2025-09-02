// synchronous -- executed one after the other
// if a method has sync keyword than it is synchronous 
// Asynchronous -- 
//  if a method has do not have any sync key word than it is called async method...

// const fileSystem = require("fs")  // fs is a built in module

// console.log(fileSystem) // output : displays all methods of fs module
// console.log("fileSystem")

//this method takes 2 parameters = filepath, callback function(error, data)
// fileSystem.readFile("./hello.txt", (error, data)=>{
//   if(error){
//     console.log("unable to read file");
//   }
//   // console.log(data); // this gives buffer values
//   console.log(data.toString())
// })

// or another method is by using utf-8
// fileSystem.readFile("./hello.txt", "utf-8", (error, data)=>{
//   if(error){
//     console.log("unable to read file");
//   }
//   console.log(data)
// })

// now let us see this is synchronous/ asynchronous method
// console.log("file reading started")
// fileSystem.readFile("./hello.txt", "utf-8", (error, data)=>{
//   if(error){
//     console.log("unable to read file");
//   }
//   console.log(data)
// })
// console.log("file reading ended")


// synchronous methods:
// const file = fileSystem.readFileSync("./hello.txt");
// console.log(file.toString());

// using utf-8
// console.log("file reading started")
// const file = fileSystem.readFileSync("./hello.txt", "utf-8");
// console.log(file); 
// console.log("file reading ended")




// now let us see write method
// fileSystem.writeFile("./ironman.txt", "iam an iron man", (err, data)=>{
//   console.log("successfully written data in file");
// });

// // i can even insert arrays or objects instead of text
// const a = {hi: "wow"}
// fileSystem.writeFile("./ironman.txt", JSON.stringify(a) , (err, data)=>{
//   console.log("successfully written data in file");
// });

// Note: the write method will insert data into the specified path if it is present or else it will create that file and insert the data into it



// append file: it is used to add data to the existing file without replacing the previous data -->bec writefile will replace the existing data 
// fileSystem.appendFile("./ironman.txt", "im tom and jerry", (err)=>{
//   console.log(err);
//   console.log("data added successfully");
// })


// to add data to a file in another folder see the way to set path
// fileSystem.appendFile("./data/user.txt", "im tom and jerry", (err)=>{
//   console.log(err);
//   console.log("data added successfully");
// })


// and if u specify the wrong file name in that folder than it will create that file in that folder and add data
// fileSystem.appendFile("./data/user2.txt", "im tom and jerry", (err)=>{
//   console.log(err);
//   console.log("data added successfully");
// })




// fie system methods to create folders:
 
// const fs = require("fs");

// fs.mkdir("./day4", (err, data)=>{
//   if(err){
//     console.log("unable to create folder");
//   }
//   console.log("folder created");
// })


// method to create folder along with create file in that folder

// const fs = require("fs");

// fs.mkdir("./day5", (err, data)=>{
//   if(err){
//     console.log("unable to create folder");
//   }else{
//     fs.writeFile("./day5/hi.txt", "hello", ()=>{
//       console.log("data written in file");
//     })
//   }
//   console.log("folder created");
// })


// method to remove a folder/directory

// fs.rmdir("./day4", (err, data)=>{
//   if(err){
//     console.log(err);
//     console.log("unable to delete folder");
//   }else{
//     console.log("folder deleted");
//   }
// });



// method to remove a file 

// fs.unlink("ironman.txt", (err, data)=>{
//   if(err) console.log("unable to delete file");
//   console.log("file deleted");
// });


// method to check whether a file exists or not 

// const b = fs.existsSync("./ironman.txt");
// console.log(b);  // true



// method to read a folder that is check data in a folder...

// fs.readdir("./", (err, data)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log(data);
//   }
// })


// method to read a folder that is check data in a folder...

// fs.readdir("./data", (err, data)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log(data);
//   }
// })





// now without callbacks
// i.e., by using promises --  ie., using async await

const fs = require("fs/promises")

// async function read() {
//   console.log("file reading started");

//   const a = await fs.readFile("./data/user.txt", "utf-8");
//   console.log(a);

//   console.log("file reading ended");

// }
// read(); 

// to handle erros in promises we use try-catch block

async function read() {
  try{
    console.log("file reading started");
  const a = await fs.readFile("./data/use.txt", "utf-8");
  console.log(a);
  console.log("file reading ended");
  }catch(error){
    console.log("error")
  }

}
read(); 




