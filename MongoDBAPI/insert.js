const dbConnect =require('./mongodb')

//sinle and multile record insert//
// create a function
const insert =async()=>{
    const db =await dbConnect();
    //  insertOne Data
    // const result = await db.insertOne(
    //     {name:'Pratibha Rana',age:25,address:'hit vidhya niketan'}
    //     )
    // insertMany  Data
    const result = await db.insertMany(
        [
            {name:'Umar',age:25,address:'7tiyig'},
            {name:'Riya',age:25,address:'hjhj'},
            {name:'Umesh',age:25,address:'dgsg'},
            {name:'Um',age:27,address:'jh',number:'878654335779'}
        ]
        );
if(result.acknowledged){
    console.log('data inserted')
}
   
}
insert();
