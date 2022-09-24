// console.log("start exec")
let a = 10;
let b= 0;
setTimeout(()=>{
    b= 20;
},2000)

console.log(a+b)
// Disadvantage of using Asynchronous js
// 1.here a and b value is set but later b value changed and it took time to load and read it so 
// output was wrong
//  so in some cases where we want all the method execute step by step as one method is directly related
// to another
// this can be handled by callback and promises//Async Await//

