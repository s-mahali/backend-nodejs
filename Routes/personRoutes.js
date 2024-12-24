const express = require('express');
const router = express.Router();
const Person = require("../models/person");


router.post("/", async (req, res) => {
    try {
      const data = req.body; // Assuming the request body contains the person data
  
      //create a new Person document using the Mongoose model
      const newPerson = new Person(data);
  
      //save the new person to the database
      const savedPerson = await newPerson.save();
      console.log("Data saved successfully");
      res.status(201).json({ savedPerson });
    } catch (err) {
      console.log("Error saving person:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const person = await Person.find();
      console.log("Data fetched successfully");
      res.status(201).json({ person });
    } catch (err) {
      console.log("Error saving person:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });  

  
router.get('/:workType', async(req, res) => {
  try{

    const workType = req.params.workType;//extract the work type from the url
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const person = await Person.find({work: workType});
        console.log("data fetched");
        res.status(200).json(person);
    }else{
        res.status(404).json({error: 'Invalid work type'});
    }

  }catch(err){
     console.log(err.message);
     res.status(500).json({error: 'Internal server error'});
  }
});

router.put('/:id', async(req,res) => {
   try{
        const personId = req.params.id; // extract the id from the url parameter
        const updatePersonData = req.body; // update data for the person

        const response = await Person.findByIdAndUpdate(personId, updatePersonData,{
            new: true, // return the updated document
            runValidators: true // Run Mongoose validators on the update operation
        });

        if(!response){
            return  res.status(404).json({error: 'Person not found'});
        }
        
        console.log("data updated successfully");
        res.status(200).json(response);
   }catch(err){
     console.log(err)
     res.status(500).json({error: 'Internal server error'});
   }
});

router.delete('/:id', async(req, res) => {
   try{
        const personId = req.params.id;
      const response =  await Person.findByIdAndDelete(personId);

      if(!response){
          res.status(404).json('person not found!')
      }

      console.log("data delete");
      res.status(200).json('person Deletes Successfully');

   }catch(err){
    console.log(err)
    res.status(500).json({error: 'Internal server error'});
   }
})



module.exports = router;  