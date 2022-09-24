const a= 40;
const b = 0;
// Before 
// setTimeout(()=>{
//   b= 20;
// },2000);
// after
// wait internal data and give update oput
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // b=30;
        resolve(30)
      },2000);
})

waitingData.then((data)=>{
   // b=data;
    console.log(a+data);
})
