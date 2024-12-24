// console.log("notes file uploaded");

// const id = 1;
// const add = (a,b) => {
//    return a+b;
// }
// module.exports = {
//     id,
//     add,
// }

// server.js note
//  const os = require("os");
//  const fs = require("fs");
//  const notes = require("./notes.js");
//  const _ = require("lodash");

//  console.log(notes.id)
//  console.log(notes.add(2,3));

 

// callback function in javascript
 // function callback(){
//     console.log("hello world");
// }
// const add = function(a,b, callback){
//      console.log("add:", a+b);
//      callback();
     // }
// add(3,4,() => console.log("hello there")
// )

//************************************************
//Core Node modules
// const os = require("os");
//  const fs = require("fs");
//  const user = os.userInfo();
//  console.log(user);

//  fs.appendFile('greeting.txt', "yo boii" + "\n", () => (
//      console.log("file created")
//     ));

// console.log(os);

// const data = ["rohan", 56, "sohan", 1,3, "rohan", "56", 3,1];
//  const filter = _.uniq(data);
//  console.log(filter);
//  console.log(_.isString(data[6]));
//  console.log(data[6]);

// notes of express js endpoint and api and building server >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const express = require('express');
// const app = express();

// app.get('/', function (req, res) {
//  // res.send("server is live now")
//   res.send("welcome to my hotel, how can i serve you");
// });

// app.get('/serve', function(req, res){
//     res.send("i would love to serve you");
// })

// app.get('/dosa', (req, res) => {
//     const customize_Dosa = {
//         name: "dosa",
//         price: 100,
//         isChutni: true,
//         isSamvar: false
//     }
//     res.send(customize_Dosa);
// })

// app.listen(3000, () => {console.log("server is running on port 3000")});


// post method older version 
// app.post('/person', (req, res) => {
//      const data =  req.body; // assuming the request body contains the person data

//      // create a new Person document using the Mongoose model
//      const newPerson = new Person(data);

//      //save the new person data;
//      newPerson.save((error, savedPerson) => {
//         if(error){
//            console.log("error saving person:", error);
//            res.status(500).json({error: 'Internal server error'})
//         }else{
//            console.log("data saved successsfully");
//            res.status(200).json({savedPerson})
//         }
//      })

