const dbConnect =require('./mongodb')

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data)
//     })//return promise again
// })

//handle promises in another way : with async await//
const main= async()=>{
    let data = await dbConnect();
    // Getting all the array object in products collection
    data = await data.find().toArray();
    console.warn(data)
}
main()
//promises// when db connection gets executed when result come //use .then 
// console.warn(dbConnect()); it return promise so to handle
// promise we have tewo things we can use 
//async
//promise




