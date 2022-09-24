In this Project I am Learning and Practising Node js where I have covered points are 
1.Requirement/Installation (packages): node js | Nodemon | Mongoose |Mongodb Compass|Postman For testing API's | Mysql or phpmyadmin for testing | 
2.Covered Points are
​
 Make basic server in node js
 What is the package.json file and use in node js
 Make Simple API in node js
 Input from command line 
​ Show file List with file system
​ Curd with file system
​ Asynchronous Node js 
 ​Handle Asynchronous Data in Node js 
​ How Node js Works
​ Express js Introduction
​ Routing with express js
​ Render html in node js 
​ Make HTML pages in node js 
​ Remove file extension  
​ Template Engine ejs
​ Dynamic page in node js 
​ Middleware node js 
​ Route level middleware 
 ​ Install Mongodb for node 
 ​ Basics of MongoDB
 ​ CURD operation with MongoDB
 ​ Connect Mongodb with node 
 ​ Read data from MongoDB to node js
 ​ Insert data from MongoDB to node js
 ​ Update data from MongoDB to node js
 ​ Read data from MongoDB to node js
 ​ GET API with MongoDB and  node js
 ​ POST API method  with node js and MongoDB
 PUT API in node js and mongo DB
 DELETE API in node js and mongo DB
 Node js mongoose 
 CRUD operations with node js and mongoose
 POST API with node js and mongoose
 GET, DELETE AND PUT APIs with node js and mongoose
 Search API with node js and mongoose
 CRUD operations with node js and mongoose
 OS module node js 
 CRUD operations in node js 
 Events and event emitter in node js
 REPL in node js 
 Node js with MySQL connection 
 POST API with node and MySQL
 PUT API with node js and MySQL
 DELETE API with node js and MySQL
 Node js vs PHP
 From ANil sir Videos
1. Creating a Server in Node js For API:

Creating .json file
>>   npm init 

Interview Question 
Node Js is single threaded / multi threaded
>>Single Threaded
>>one time one time takes one command
Challenges for You >>
>>What happened if the node_module folder is deleted?
>>.correct way to push data on git
>>install few packages
- [ ] 1.npm i chalk 
- [ ] 2.colors
- [ ] 3simple-node-logger

2. When the node project got deleted
3. Hit run command 
4. Rpm install

Nodemon | Time saving module
>>who is nodemon package
>> how to install
>>interview questions
npm i nodemon -g
>>-g stand for installing nodemon globally in our system in our os
>>Run nodemon in the background 
 >>npx nodemon .\index.js



Creating a Server in Node js For API:

const http = require('http');
const data = require('./data');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
// resp.write('{name:Pratibha Rana,email:pratibharana@gmail.com}');
// resp.write(JSON.stringify({name:'Pratibha Rana',email:'pratibharana@gmail.com'}));
resp.write(JSON.stringify({data}));
// json.stringify
resp.end();
}).listen(45000);


Inout from Command line:

Set input from command line
Create file with input 
Delete the file with input
Interview Question

const fs = require('fs');
const input = process.argv;
fs.writeFileSync(input[2],input[3])
//// node index.js  apple.txt 'ThiIs the fru ///
const fs = require('fs');
const input = process.argv;
if(input[2] =='add'){ 
  fs.writeFileSync(input[3],input[4])
}else if(input[2] =='remove'){
    fs.unlinkSync(input[3])
}
else{
    console.log("Invalid input")
}



//Crud Operation in file Nodejs

// Crud With file system//
// make file
// Read file
// Update file
// Rename file
// Delete file

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;
// write file in crud folder
fs.writeFileSync(filePath,`This is the sample write file crud`);
// read file from crud folder
fs.readFile(filePath,'utf8',(error,item)=>{
console.log(item)
})
// update file //first append it  //only run this appendfile else it always append the same content in that file
fs.appendFile(filePath,' and my apppended data is PRTAIBHE',(err)=>{
  if(!err) console.log('file is updated')
})
// Rename file  from apple to banana //done
fs.rename(filePath,`${dirPath}/banana.txt`,(err)=>{
    if(!err) console.log('renamed file')
})
// delete file 
fs.unlinkSync(`${dirPath}/banana.txt`)


// Interview Questions //
// What is Buffer//
Temprarory memory location 
//what is Asynconous//
///what is multipthreaded//
//
//operation perform node js need memory //



Asynchronous and synchronous Node Js
synchronous
User …. Products… cities …

Asynchronous
User…
 Products ….
   Cities ….
Benefits 
Execution speed time
Fast
Node is asynchronous programming language
Php is synchronous programming language
Disadvantages of using Asynchronous
 let a = 10;
let b= 0;
setTimeout(()=>{
    b= 20;
},2000)

console.log(a+b)


- [ ] // Disadvantage of using Asynchronous js
- [ ] // 1.here a and b value is set but later b value changed and it took time to load and read it so 
- [ ] // output was wrong
- [ ] //  so in some cases where we want all the method execute step by step as one method is directly related
- [ ] // to another
- [ ] // this can be handled by callback and

Solution of all Disadvantages of Asynchronous

Promises:

const a= 40;
const b = 0;
// Before 
// setTimeout(()=>{
//   b= 20;
// },2000);
// after
// wait internal data and give update oput
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // b=30;
        resolve(30)
      },2000);
})

waitingData.then((data)=>{
   // b=data;
    console.log(a+data);
})

Interview Questions:
Asynchronous/synchronous 
Buffer:
How Node js Works
Call Stack:
Node API:
CallBack Queue:
EXample:
Interview Questions:

1. First a function executes 
2. Register on call stack

Question : How Node Js works In Background //Architecture of node js
For ex:
console.log("starting work") (1)

setTimeout(()=>{
    console.log("2 sec log")
},2000)

setTimeout(()=>{
    console.log("0 sec log")
},0)
console.log("finishing work”)(2)


Asynchronous Node Js
Call stack                            node APIS


1                                                                         2
Register all 50 function    

Ex .console.log("starting work")               setTimeout(()=>{ console.log("2 sec log")},2000)
                                                                      setTimeout(()=>{ console.log(“0 sec log")},2000)(3)
Ex. console.log("finishing work")    

Clear whole stack first call o sec log 
Then call 2 sec log

Log(‘’sum is 3) 
main()

When inner function completes 
main function gets empty
Then call 0 sec log
And call 2 sec log

Event Loop 

Callback Queue.                3

 setTimeout(()=>{ console.log(“0 sec log")},2000)
Clear 0 sec log then
  setTimeout(()=>{ console.log("2 sec log")},2000)


Output:
Ex. console.log(“starting work")   
Ex. console.log("finishing work")   
Ex.0 sec log
Ex.2  sec log



Express Js  Framework  // To reduce load need Express js //
It’s a framework inside node js like laravel is a framework inside php

1. What is express js
2. Install Express
3. Make Example with express js.
4. Interview Question.
First Install Express in your nodes projects:
>> npm install express

>>Render html and json data useful for API
>>Linking page
>>routing

Output:
const express = require('express');
const res = require('express/lib/response');
const app = express();
// Getting routes in express
app.get('',(req,resp)=>{
    // For getting the request 
    console.log("Data sent by browser", req.query.name);
    // NAVBAR OF THE PAGE //
    // resp.send("<h1> GO TO NAVBAR FROM HERE'+'  '+req.query.name  </h1>");
    resp.send(`<h1> Hello, this is Home Page </h1>
    <a href="/about">GO to About Page</a></br>
    <a href="/contact">GO to Contact Page</a>`);
})
// about us page
// pass parameter from routes//
// pass dynamic params from url for testing like this //http://localhost:51000/about?name=anilss&click=clikemess
app.get('/about',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="User name" value="${req.query.name}" />
    <button>${req.query.click}</button></br>
    <a href="/">GO to Home Page</a>
    `)
    // resp.send(`<h1> Hello, this is About Page </h1><a href="">GO to About Page</a>`);
})
// contact us page
app.get('/contact',(req,resp)=>{
    resp.send([
        {
            name :'pratubha',
            age:26,

        },
        {
            name :'same',
            age:21,

        },

    ]);
    // resp.send('Hello, this is Contact Page');
});

app.listen(51000);

Make Html Pages

- [ ] Make folder for HTML file and access it
- [ ] Make HTML files
- [ ] Load html files
- [ ] Interview Question.
- [ ] >>create html file in folder
- [ ] 
const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));

app.listen(51000);

Remove Extension from URL

- [ ] Apply Get Method.
- [ ] Remove an extension from URL.
- [ ] Make 404 page
- [ ] Apply 404 page



Middleware://Nodejs
1. Create middleware
2. Apply middleware on routes
3. Types of middleware
//  Types of Middleware
//route level middleware //apply to only selected routes not all//
//application level middleware //apply to apI routes


Use Middleware In same File With basic middleware
// Middleware And their USe 
const reqFilter=(req,resp,next)=>{
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
Example:
 app.use(reqFilter);
app.get('/',(req,resp)=>{
resp.send('Welcome to our home page')
})
app.get('/users',(req,resp)=>{
    resp.send('Welcome to our Users page')
    })
app.get('/about',(req,resp)=>{
    resp.send('Welcome to our About page')
    })
app.listen(52000)



Route Level Middleware 
Is one which can be apply to one route or a group of routes and all routes 

:
1. Route Level Middleware
2. Apply miidleware on single route
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




Crud Operation in Mongo DB:
:1. How to insert data Collection
2)How to check Inserted Data 
3)How to Update Data 
4)How to Delete Data
INterview Questions

use e-comm

'switched to db e-comm'
show dbs

Youtubankush    8.00 KiB
admin          40.00 KiB
clarity         8.00 KiB
config        152.00 KiB
local          72.00 KiB

db createCollection(products)


Error: clone(t={}){const r=t.loc||{};return e({loc:new Position("line"in r?r.line:this.loc.line,"column"in r?r.column:...<omitted>...)} could not be cloned.

db.createCollection('videosy2')

{ ok: 1 }
db.createCollection('products')

{ ok: 1 }
show collections

products
videosy2

db.videosy2.drop()

true
show collections

products

db.products.insertOne({name:'Pratibha',age:25,addres:'huteshi vidya niketan'})

{ acknowledged: true,
insertedId: ObjectId("62cfb5446879c9f40378057d") }
db.products.insertOne({name:'himans',age:25,addres:'shimla'})

{ acknowledged: true,
insertedId: ObjectId("62cfb5986879c9f40378057e") }
db.products.insertOne({name:'AJay',age:15,addres:'Jaypore'})

{ acknowledged: true,
insertedId: ObjectId("62cfb64b6879c9f40378057f") }
db.products.find()

{ _id: ObjectId("62cfb5446879c9f40378057d"),
name: 'Pratibha',
age: 25,
addres: 'huteshi vidya niketan' }
{ _id: ObjectId("62cfb5986879c9f40378057e"),
name: 'himans',
age: 25,
addres: 'shimla' }
{ _id: ObjectId("62cfb64b6879c9f40378057f"),
name: 'AJay',
age: 15,
addres: 'Jaypore' }
db.products.find()

{ _id: ObjectId("62cfb5446879c9f40378057d"),
name: 'Pratibha',
age: 25,
addres: 'huteshi vidya niketan' }
{ _id: ObjectId("62cfb5986879c9f40378057e"),
name: 'himans',
age: 25,
addres: 'shimla' }
{ _id: ObjectId("62cfb64b6879c9f40378057f"),
name: 'AJay',
age: 88,
addres: 'Jaypore' }
db.product.uddateOne({name:"AJay"},{$set:{age:12}})


TypeError: db.product.uddateOne is not a function

db.product.uddateOne({name:"AJay"},{set:{age:12}})


TypeError: db.product.uddateOne is not a function

db.products.uddateOne({name:"AJay"},{set:{age:12}})


TypeError: db.products.uddateOne is not a function

db.products.uddateOne({name:"AJay"},{$aset:{age:12}})


TypeError: db.products.uddateOne is not a function

db.products.uddateOne({name:"AJay"},{$set:{age:12}})


TypeError: db.products.uddateOne is not a function

db.products.updateOne({name:"AJay"},{$set:{age:12}})

{ acknowledged: true,
insertedId: null,
matchedCount: 1,
modifiedCount: 1,
upsertedCount: 0 }
db.products.deleteOne({name:"AJay"})

{ acknowledged: true, deletedCount: 1 }


Connect Node with MongoDb

Install MongoDB Package
Contact MongoDB with Node Js
Show Data from mongo DB


Can we connect multiple database into on connection
1.read data from MongoDB


MongoDB:
Install Mongo DB:

Download DB
Install MongoDB
Set Environment 
Mongobd Compass Tool



Install MOngo DB Command:
- [ ] # If you still have the old mongodb installed from homebrew-core
- [ ] brew services stop mongodb
- [ ] brew uninstall homebrew/core/mongodb

- [ ] # Use the migrated distribution from custom tap
- [ ] brew tap mongodb/brew
- [ ] brew install mongodb-community
- [ ] brew services start mongodb-community
- [ ] Check if mongo is installed with command >> MONGO
- [ ] Now install mongo db compass
- [ ] From
- [ ]  this link https://www.mongodb.com/try/download/compass

MongoDB: Basic
- [ ] What is MongoDB:
- [ ] MongoDB vs SQL
- [ ] MongoDB basic commands
- [ ] Interview Question:
What is Mongo DB

MOngo DB is a NoSQL database.
>>mongo db don’t hv any struture>>
Benifits >>columns and rows >> nodal is perfect if we don’t want all the rows and columns
- [ ] 
The data stored in a collection
- [ ] Collection don’t have row and columns
- [ ] Data  is stored in the form of object
- [ ] For structured data we need sql>>
- [ ] >>data is non structured >> so Mongo db is perfect >>and memory don’t get waste if we don’t need extra table because no null value comes
- [ ] >> for example if you filling a form if few files are not filled so memory is left but in case of mysql 
- [ ] The memory is aways take even if the data is not present 
- [ ] 


Command of mongoose:

Show ALL DBS:
show dbs

admin    40.00 KiB
clarity   8.00 KiB
config   36.00 KiB
local    72.00 KiB

Show collections:

show collections

Show ALL DBS:
show databases

admin    40.00 KiB
clarity   8.00 KiB
config   36.00 KiB
local    72.00 KiB
Show Roles:
show roles

[ { role: 'dbOwner',
db: 'test',
isBuiltin: true,
roles: [],
inheritedRoles: [] },
{ role: 'dbAdmin',
db: 'test',
isBuiltin: true,
roles: [],
inheritedRoles: [] },
{ role: 'enableSharding',
db: 'test',
isBuiltin: true,
roles: [],
inheritedRoles: [] },
{ role: 'userAdmin',
db: 'test',
isBuiltin: true,
roles: [],
inheritedRoles: [] },
{ role: 'read',
db: 'test',
isBuiltin: true,
roles: [],
inheritedRoles: [] },
{ role: 'readWrite',
db: 'test',
isBuiltin: true,
roles: [],
inheritedRoles: [] } ]
clear


ReferenceError: clear is not defined
Go to Youtubedb
use youtubedb

'switched to db youtubedb'
show dbs
Show ALL DBS: but can’t see the new db youtubedb
Youtubankush   8.00 KiB
admin         40.00 KiB
clarity        8.00 KiB
config        96.00 KiB
local         72.00 KiB

For that first create collections videosyoutube
db.createCollection('videosyoutube')

{ ok: 1 }
show dbs
Show ALL DBS: now can see db youtubedb
Youtubankush    8.00 KiB
admin          40.00 KiB
clarity         8.00 KiB
config        112.00 KiB
local          72.00 KiB
youtubedb       8.00 KiB

show collections
Show ALL collection inside db youtubedb
videosyoutube
>>another collection inside youubedb 
db.createCollection('videosy2')

{ ok: 1 }
show collections

videosy2
videosyoutube

Drop collection inside youtubedb:
db.videosy2.drop()

true
show collections

videosyoutube

show dbs

Youtubankush    8.00 KiB
admin          40.00 KiB
clarity         8.00 KiB
config        112.00 KiB
local          72.00 KiB
youtubedb       8.00 KiB

Drop database ://bydefault it will delete  the present  database youtubedb
db.dropDatabase()

{ ok: 1, dropped: 'youtubedb' }

{ ok: 1, dropped: 'youtubedb' }
show dbs

Youtubankush    8.00 KiB
admin          40.00 KiB
clarity         8.00 KiB
config        132.00 KiB
local          72.00 KiB


Code to connect mongo db with node 
1. Install mongo db package
2. Then write this code to fetch all the json object from project collection inside e-comm table which we have created earlier in the nodemon compass
// way to require mongodb new way from doc
const { MongoClient } = require('mongodb');
// Give path ti mongodb:
const url  = 'mongodb://localhost:27017';
const database  = 'e-comm';
const client = new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    let db= result.db(database); //it connect with db 
    //return db.collection('products');
    console.log(collection.find().toArray());//this returns all  the array collection inside product 
    let response =  await collection.find({name:'Pratibha'}).toArray();//it find the name with Pratibha in the collection and return the specific array
    let response =  await collection.find({age:25}).toArray();
    console.log(response);
}




Update Data in MongoDB:

1.Make new file for Update data
2.Import MongoDB connection
3.Update single and multiple records
4.Interview Questions->on update one which matching record gonna be updated 
Answer is : the first matching record in db got updated
Using updateOne and updateMany

// Update single an dmultple rcord in mongodb//
const updateData= async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
    let result = await data.updateMany(
        {name: 'himans'},{
            $set: {name: 'PRATIBHA LATEST', age:500 }
        }

    );
    console.warn(result)
}

Delete Data in MongoDB://

1.Make new file for delete data
2.Import MongoDB connection
3.Delete single and multiple records
4. Interview question
5. How would you check if the data is deletd or not ?
- [ ] Answer  : When even we try to delete any record we got acknowledged : true and deletedCount :0
- [ ] If we get deletedCount = 0 it means in our db no record found and no record got deleted



API With MongoDB:
1. Make a new file for API
2. Import and Use Mongo Config
3. Make API for get data
4. Test with postman
5. Interview Question:
GET  =>Used for getting db from db
PUT =>update the data from db
POST  =>Add the data from db
PATCH =>Add and update the data from db
 DELETE => Delete the data from db
**************************************
**************************************
**************************************
Node Js Post API method
1.Make post method for API
2.Send data from postman
3.Insert data in MongoDB
4. interviw question :
5. 

Node Js Put API method (update)
1.Make Put method for API
2.Send data from postman
3.Insert data in MongoDB
4. interviw question :


Node Js Delete API method (update)
1.Make Delete method for API
2.Send data from postman
3. Handle data in node js by request
3.Delete  data in MongoDB
4. interviw question :





Start With Mongoose
1.What is Mongoose
2.Difference between Mongoose  Vs MongoDB Package
3.Install Mongoose
4. What is schemas
5. Schemas are the structure layout of the table
schema what are the field I have in my databse now monsoose validate schemas 

5. What is Model
Model :uses the schemas to connect MongoDB and nodes

2.Crud with Mongo
1.continue Last video code (What is mongoose model)
2.Update Record 
3.De/Volumes/pratibha Personal/Xampp Projects/My Projects/Node Projects/Events and Event Emitter/index.jslete Record
4.Find and Read Result

3.Post Api with Mongoose 
1.Make config File For MongoDB
2.Make Post Route
3.Get data from the postman and save in DB
4.Interview Question

4.Search API in Node JS with Mongo DB using regix
1.Make simple get route 
2.search with single field
3. Search with multiple field
4. Test api
5. 
Upload File in Node JS

Install Multer npm package
Make Router for upload file
Write Code for upload file
Interview Question

Os Module In Node JS
What is Os Modules

Import functions of OS module

Interview Question

Event and Event Emitter in Node Js
 
What is event and event emitter 
Event is when any activity is perform we call it asa event and the event is emitting that is event emitter
Make an event and call it
Interview Question


REPL
READ -EVAL - Print  Loop

What is REPL
Example of REPL
Interview Question//

NPM MYsql Integration//
1. Mysql npm package install
2. https://www.npmjs.com/package/mysql
npm i mysql

Node JS Get API with Mysql //
1.Make config file
2.Make Route for API
3.Get data from Mysql
4.interview Question















