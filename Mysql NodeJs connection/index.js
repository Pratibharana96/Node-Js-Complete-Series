const express = require('express');
const connn  = require('./config')
const app = express();
app.use(express.json());
// console.warn(connn);
// app.get("/",(req,resp)=>{
//   connn.query("Select * from products", (err, result)=>{
//     console.warn();
//      if(err){
//       resp.send("error");
//      }else{
//       resp.send(result);
//      }
//   })
// });

//save with mysql//
// app.post("/",(req,resp)=>{
//  const data = req.body;
//   console.warn(data);
//   // const data  = {name:"bhasker",desc:"visitor"}
//   connn.query("Insert into products SET ?", data, (error,result,fiels)=>{
//     if(error)throw  error;
//     resp.send(result);
//     })
// });

// Put with Mysql
app.put('/update',(req,resp)=>{
  // const data = req.body;
  const data = ["ronny",1];

  connn.query("update products SET name= ?  where id = ?",data,(error, results, fields)=>{
    if(error) throw error;
        resp.send(results);
  })
  // console.warn(results);
});
//delete with Mysql
app.delete('/delete/:id',(req,resp)=>{
   connn.query("Delete From products where id = " +req.params.id ,(error, results,fields)=>{
     if(error) throw error;
      resp.send(req.params.id)
   })
});
app.listen(51000)