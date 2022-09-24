// Unterview Question on node
// 1. make Basic Server.
// 2. function as parametr in Node.
// 3.Arrow function
// 4.Get Output On Browser.
// 5.Interview Question.
const http = require('http');
// http.createServer((req,res)=>{
//     res.write('<h1>Pratibha ranass</h1>');
//     res.end();
// }).listen(4500);
// Another way of writing this
const  datacontrol = (req,res)=>{
  res.write('<h1>Well Done</h1>');
  res.end();
}

http.createServer((req,res)=>{
    res.write('<h1>Well Done</h1>');
    res.end();
  }).listen(4500);
// Another Arrow funct
// const datacontrolSer = (res,req) => {
//     res.write('<h1>Pratibha ranass</h1>');
//     res.end();
// }
// http.createServer(datacontrolSer).listen(6771);
// Benifits of using arrow func
var a=22;
const multi = (a) => a*1;
console.log(multi);