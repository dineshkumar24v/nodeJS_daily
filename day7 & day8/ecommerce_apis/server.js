const http = require("http");
const url = require("url");
const {readFile, writeFile} = require("./products/products.js");
const { json } = require("stream/consumers");

// 09-07-2025
const {v4} = require("uuid");
const { read } = require("fs");
console.log(v4()); // this generates a unique id

// console.log(readFile())
// default server http://127.0.0.1:3000/addProduct or http://localhost:3000/addProducts both are same...

http.createServer((req, res)=>{
   const parsedURL = url.parse(req.url);
   const pathName = parsedURL.pathname;
   const method = req.method;
   // console.log(parsedURL);

   // id creation logic
   const path = pathName.split("/");
   const id = path[2];
   console.log(id);
   // console.log(pathName.split("/")[2]);

   // get all products method
   if(method === "GET" && pathName === "/products"){
      const data = readFile();
      res.writeHead(200);
      res.write(JSON.stringify(data));
      return res.end();
   }
   // get products based on id: 
   //   /id -- called path params
   else if(method === "GET" && pathName === `/products/${id}`){
      const data = readFile();
      const product = data.find((item) => item.id == id);
      if(product){
         res.writeHead(404);
         res.write(JSON.stringify(product));
         return res.end();
      }else{
         res.writeHead(404);
         res.write("product not found");
         res.end();
      }
      // console.log(product);
      // res.write(id);
      // return res.end();
   }

   // 09/07/2025
   // post method adding data
   else if(method === "POST" && pathName === "/addProducts"){
         let body = ""
      // req.on() method -- means listen to the server
      // req.on("end") method -- to end listening to the server if not it will continuously listens to the server...
      req.on("data", (chunk)=>{
         body += chunk; // concatinating chunk to body

         // console.log(chunk);
      })
      req.on("end", ()=>{
         const data = readFile();
         // console.log(data);
         const inputData = JSON.parse(body);
         inputData.id = v4();
         // console.log(inputData)
         data.push(inputData);
         console.log(data); 
         writeFile(data);
         const message = {message: "product added successfully",
            product: inputData
         }
         res.write(JSON.stringify(message)); 
         res.end();
      });
         return;
      // res.write("added products");
      // return res.end();
   }

   else if(method == "PUT" && pathName == `/updateProduct/${id}`){
      const data = readFile();
      const checkProduct = data.find(item => item.id == id)
      if(checkProduct){
         let body = "";
         req.on("data", (c)=> {
            body += c;
         })
         req.on("end", ()=>{
            body = JSON.parse(body);
            // console.log(body);
            // checkProduct.name = body.name;
            // checkProduct.category = body.category;
            // checkProduct.price = body.price;
            // console.log(checkProduct);
            for(value of data){
               if(value.id == id){
               value.id = id;
               value.name = body.name;
               value.category = body.category;
               value.price = body.price;
               }
            }
         });
         // console.log("final data",data);
         writeFile(data);
         res.write("updated successfully");
         res.end();
      }else{
         res.write("product not found");
         res.end();
      } 
      // console.log(checkProduct);
      // res.write("update");
      // res.end();
      return;
   }

   // delete by id api:
   else if (method == "DELETE" && pathName == `/deleteProduct/${id}`){
      const data = readFile();
      const check = data.some((item) => item.id == id);
      console.log("check id ...", check);
      if (check) {
        const newData = data.filter((item) => item.id != id);
        writeFile(newData);
        res.writeHead(204);
        res.write("deleted successfully");
        res.end();
      } else {
        res.writeHead(404);
        res.write("Product Not Found");
        res.end();
      }
      // const newData = data.filter((item) => item.id != id);
      // console.log(newData);
      // res.write("deleted");
      // res.end();
      return;

   }

   res.write("im server");
   return res.end();
})
.listen(3000, ()=> console.log("server started"))
 