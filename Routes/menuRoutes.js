const express = require('express');
const router = express.Router();
const MenuItem = require("../models/Menu");



router.post("/", async (req, res) => {
    try {
      const data = req.body;
      //create a new Item document using the Mongoose model
      const newMenuItem = new MenuItem(data);
  
      //save newMenuItem to the database
      const savedMenuItem = await newMenuItem.save();
      console.log("menudata saved");
      res.status(200).json(savedMenuItem);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
  
  router.get('/', async(req,res) => {
      try{
  
          const menuItem = await MenuItem.find();
          console.log("data fetched");
          res.status(200).json(menuItem);
  
      }catch(err){
          console.log(err.message);
          res.status(500).json({error: 'Internal server error'});
  
      }
  })

  router.get('/:taste', async(req,res) => {
     const taste = req.params.taste;
      try{
        if(taste === 'sour' || taste === 'sweet'|| taste === 'savory' || taste === 'spicy' || taste === 'non-spicy'){
            const menuItem = await MenuItem.find({taste});
            console.log("taste fetched");
            res.status(200).json(menuItem);
        }else{
            res.status(404).json({error:'sahi data dalo bhai'});
        }
       
      }catch(err){
        console.log(err.message);
        res.status(500).json({error: 'internal server error'});
      }
  })

  router.put('/:id', async(req,res) => {
     try{
        const menuId = req.params.id;
        const menuData = req.body;
        const response = await MenuItem.findByIdAndUpdate(menuId, menuData,{
          new: true, // return the updated document
          runValidators: true
        });
      if(!response){
         res.status(401).json({error: 'menuItem not found'});
      }  

      console.log('menuItem updated');
      res.status(200).json(response);
         
     }catch(err){
         console.log(err);
         res.status(500).json({error: 'internal server error'});
     }
  })

  router.delete('/:id', async(req,res) => {
     try{
           const menuId = req.params.id;
           const response = await MenuItem.findByIdAndDelete(menuId);

           if(!response){
              return res.status(404).json('menuItem not found');
           }
           console.log('menu deleted');
           res.status(200).json('menu data deleted');
     }catch(err){
      console.log(err);
      res.status(500).json({error: 'internal server error'});
     }
  })

  module.exports = router;