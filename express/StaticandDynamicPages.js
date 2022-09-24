const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs')
// app.use(express.static(publicPath));
// code for removing route extension from url
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});
// Dynamic page with ejs Engine //
app.get('/login',(_,resp)=>{
    resp.render('login');
})
app.get('/profile',(_, resp)=>{
    const user={
                name:'Pratibha',
                age:'26',
                gender:'Female',
                email:'pratibha596@gmail.com',
                city:'Uttarakhand',
                skills:['Php','js','c++','java','node']
    }
    resp.render('profile',{user})
});
app.get('/about',(_, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});
app.get('/contact',(_, resp)=>{
    resp.sendFile(`${publicPath}/contact.html`)
});
app.get('*',(_, resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
});
// app.get('/profile',(_, resp)=>{
//     const user={
//         name:'Pratibha',
//         age:'10',
//         gender:'Female',
//         email:'pratibh@gmail.com',
//         city:'Uttarakhand',
//     }
//     resp.render(`profile`);
// });
app.listen(51000);
// Getting routes in express
// app.get('',(req,resp)=>{
//     // For getting the request 
//     console.log("Data sent by browser", req.query.name);
//     // NAVBAR OF THE PAGE //
//     // resp.send("<h1> GO TO NAVBAR FROM HERE'+'  '+req.query.name  </h1>");
//     resp.send(`<h1> Hello, this is Home Page </h1>
//     <a href="/about">GO to About Page</a></br>
//     <a href="/contact">GO to Contact Page</a>`);
// })
// // about us page
// // pass parameter from routes//
// // pass dynamic params from url for testing like this //http://localhost:51000/about?name=anilss&click=clikemess
// app.get('/about',(req,resp)=>{
//     resp.send(`
//     <input type="text" placeholder="User name" value="${req.query.name}" />
//     <button>${req.query.click}</button></br>
//     <a href="/">GO to Home Page</a>
//     `)
//     // resp.send(`<h1> Hello, this is About Page </h1><a href="">GO to About Page</a>`);
// })
// // contact us page
// app.get('/contact',(req,resp)=>{
//     resp.send([
//         {
//             name :'pratubha',
//             age:26,

//         },
//         {
//             name :'same',
//             age:21,

//         },

//     ]);
//     // resp.send('Hello, this is Contact Page');
// });

// app.listen(51000);