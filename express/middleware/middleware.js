// Middleware And their USe 
module.exports=  reqFilter=(req,resp,next)=>{
    console.log('reqFilter');
    if(!req.query.age){
       resp.send("Please provide Page");
    }
    else if(req.query.age < 18){
        resp.send("You cannot access this page");
    }
    else{
        next();
    } 
}