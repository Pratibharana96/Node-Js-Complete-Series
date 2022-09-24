const express =require('express');
// const { route } = require('express/lib/application');
const reqFilter = require('./middleware/middleware')
const app = express();
// // Group route middleware
const route= express.Router();
route.use(reqFilter);
// // Middleware And their USe 
// const reqFilter=(req,resp,next)=>{
//     console.log('reqFilter');
//     if(!req.query.age){
//        resp.send("Please provide Page");
//     }
//     else if(req.query.age < 18){
//         resp.send("You cannot access this page");
//     }
//     else{
//         next();
//     } 
// }
//  Types of Middleware
//route level middleware //apply to only selected routes not all//
//basic middleware //apply to apI routes
// 
// application level middleware
// app.use(reqFilter);
app.get('/',(req,resp)=>{
resp.send('Welcome to our home page')
})
app.get('/users',(req,resp)=>{
    resp.send('Welcome to our Users page')
    })
// Use route level Middleware
app.get('/about',reqFilter,(req,resp)=>{
    resp.send('Welcome to our About page')
    })
app.get('/contact',reqFilter,(req,resp)=>{
    resp.send('Welcome to our contact page')
    })
    // Group route middleware
    route.get('/movie',reqFilter,(req,resp)=>{
    resp.send('Welcome to our movie page')
    })
    route.get('/documentory',(req,resp)=>{
    resp.send('Welcome to our documentory page')
    })
    route.get('/OTT',(req,resp)=>{
        resp.send('Welcome to our OTt page')
        })
    app.use('/',route);
app.listen(52000)