// Crud With file system//
// make file
// Read file
// Update file
// Rename file
// Delete file
// 
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;
// write file in crud folder
// fs.writeFileSync(filePath,`This is the sample write file crud`);
// read file from crud folder
// fs.readFile(filePath,'utf8',(error,item)=>{
// console.log(item)
// })
//update file //first append it  //only run this appendfile else it always append the same content in that file
// fs.appendFile(filePath,' and my apppended data is PRTAIBHE',(err)=>{
//   if(!err) console.log('file is updated')
// })
// Rename file  from apple to banana //done
// fs.rename(filePath,`${dirPath}/banana.txt`,(err)=>{
//     if(!err) console.log('renamed file')
// })
// delete file 
fs.unlinkSync(`${dirPath}/banana.txt`)


// Interview Questions //
// What is Buffer
