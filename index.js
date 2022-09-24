
// Show file list
// Make file in a folder 
// Use path module
// get file name and print
// 
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
for(i=0;i<5;i++){
    fs.writeFileSync(dirPath+"/hello"+i+".txt",'thisis file hello');
    // fs.writeFileSync(`${dirPath}/hello${i}.txt`,'thisis file hello');
}
// console.warn(dirPath);
// Read file and list it
fs.readdir(dirPath,(err,files)=>{
//   console.warn(files);
  files.forEach((item) => {
    console.warn("files name is this ",item);
  });
})
// fs.writeFileSync('apple.txt','thisis file apple');

// const fs = require('fs');
// const path = require('path');
// const diePath = path.join(__dirname,'files')
// console.warn(diePath);
// console.log(process.argv[3])
// file craete

// file sytem model //inbulit in php
// const fs = require('fs');
// const input = process.argv;
// if(input[2] =='add'){ 
//   fs.writeFileSync(input[3],input[4])
// }else if(input[2] =='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("Invalid input")
// }
// node index.js  apple.txt 'ThiIs the fru
// const http = require('http');
// const data = require('./data');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application\json'});
// // resp.write('{name:Pratibha Rana,email:pratibharana@gmail.com}');
// // resp.write(JSON.stringify({name:'Pratibha Rana',email:'pratibharana@gmail.com'}));
// resp.write(JSON.stringify({data}));
// // json.stringify
// resp.end();
// }).listen(45000);