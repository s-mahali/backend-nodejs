const express = require("express");
const app = express();
const db = require("./db.js");
require('dotenv').config();
const passport = require("./auth.js");



const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());


//middleware function
const logRequest = (req, res, next) => {
  console.log(`Requested made to : [${new Date().toLocaleDateString()}],${req.url},${req.method}`);
  next();//move on to the next phase
}
//use the middleware
 app.use(logRequest);

 
 app.use(passport.initialize());
//  const localAuthMiddleware = passport.authenticate("local", {
//    session: false
//  })

app.get("/",  function(req, res) {
  res.send("welcome to my hotel, how can i serve you");
});

const personRoutes = require("./Routes/personRoutes");
app.use("/person",   personRoutes);

const menuRoutes = require("./Routes/menuRoutes");
app.use("/menu",  menuRoutes);


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; // Assuming the request body contains the person data

//     //create a new Person document using the Mongoose model
//     const newPerson = new Person(data);

//     //save the new person to the database
//     const savedPerson = await newPerson.save();
//     console.log("Data saved successfully");
//     res.status(201).json({ savedPerson });
//   } catch (err) {
//     console.log("Error saving person:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.get("/person", async (req, res) => {
//   try {
//     const person = await Person.find();
//     console.log("Data fetched successfully");
//     res.status(201).json({ person });
//   } catch (err) {
//     console.log("Error saving person:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });



// app.post("/menu", async (req, res) => {
//   try {
//     const data = req.body;
//     //create a new Item document using the Mongoose model
//     const newMenuItem = new MenuItem(data);

//     //save newMenuItem to the database
//     const savedMenuItem = await newMenuItem.save();
//     console.log("menudata saved");
//     res.status(200).json(savedMenuItem);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "internal server error" });
//   }
// });

// app.get('/menu', async(req,res) => {
//     try{

//         const menuItem = await MenuItem.find();
//         console.log("data fetched");
//         res.status(200).json(menuItem);

//     }catch(err){
//         console.log(err.message);
//         res.status(500).json({error: 'Internal server error'});

//     }
// })

//Import the router File

