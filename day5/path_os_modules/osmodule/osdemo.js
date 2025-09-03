const os = require("os");

// console.log(os); // gets all os module methods

// console.log(os.cpus());  // gets the cpu info it has 12 cors

// console.log(os.cpus().length);  // 12 --> 6 cors * 2 = 12


// console.log(os.hostname())


// console.log(os.homedir())



// console.log(os.userInfo());





// these are used by devops person

// console.log(os.totalmem()); // we get it in bytes
// console.log(os.freemem());  // we get it in bytes



console.log(os.uptime())
console.log(os.networkInterfaces())  // like wifi address mac address