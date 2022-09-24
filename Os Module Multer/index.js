const express = require('express');
const multer = require('multer');
const app = express();
// file upload using multer and ass object as a destination
const upload =multer({
    storage:multer.diskStorage({
        // cb is callback
        destination:function(req,file,cb)
        {
            cb(null,"uploads") //give the path of folder where store image
        },
        filename:function(req,file,cb)
        {
            cb(null,file.fieldname + "-" + Date.now() + ".png")
        }
    })
}).single("user_file");
app.post("/upload",upload, (req, resp) =>{
    resp.send("file ipload")
});

app.listen(32999);