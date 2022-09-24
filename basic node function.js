// import export in node js
// import {x} from './app'
// Non gobal module
const fs = require('fs');
const { Server } = require('http');
const app = require('./app')
console.log("subs");
var x= '20';
var y = 10;
const z = 90;
// z = 100;
if(x == 20)
//console.log("matches");
for(i=0;i<=10;i++)
{
    //console.log(i);
}
//console.log(app.z);
// ARRAY
const arr =[111,2,3,33,3,42];
// filrer function 
let result = arr.filter((item)=>{
    return item >=3
    //console.log(result);
})
console.log(result);
// Core Modules?
// global modules  //where dont need to import the module
// global Model Example
// Non global Module with ex// the moduleneed to import before calling
fs.writeFileSync("hello.txt","Pratibha Step By step")
// global models dont need to import//
console.log("-->",__dirname);
console.log("-->",__filename);
// int quest

// Unterview Question on node
// 1. make Basic Server.
// 2. function as parametr in Node.
// 3.Arrow function
// 4.Get Output On Browser.
// 5.Interview Question.