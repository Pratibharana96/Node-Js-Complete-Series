const express = require('express');
const EventEmitter = require ("events");//hhere EvenrEmitter is a class 
const res = require('express/lib/response');
const app = express();
const event = new EventEmitter();
let count = 0
event.on("countAPI",()=>{
    count ++;
    console.log("event called",count)
})
app.get('/',(req,resp) =>{
    resp.send("Event api send");
    event.emit("countAPI");
})
// search api
app.get('/search',(req,resp)=>{
    resp.semd("Got search result data")
    event.emit("countAPI");
});
// Update Api
app.get('/update',(req,resp)=>{
    resp.send("ypdated API");
    event.emit("countAPI");
})
app.listen(51000);
