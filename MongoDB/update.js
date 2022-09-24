const dbConnect  = require('./mongodb');

// Update single an dmultple rcord in mongodb//
const updateData= async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: 'himans'},{
            $set: {name: 'PRATIBHA LATEST', age:500 }
        }

    );
    console.warn(result)
}
updateData();