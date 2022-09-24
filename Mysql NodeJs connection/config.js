const mysql =require('mysql');
const con = mysql.createConnection({
    host:"localhost",
    username:"root",
    password:"",
    database:'test'
});
con.connect((err)=>{
    if(err){
        console.warn("error occoured");
    } else {
        console.warn("done");
    }
});
// con.query("select * from products",(err, result)=>{
//     console.warn(result)
// });
module.exports = con;