const express=require('express');
const router=express.Router();


const {test_description} = require('../models');

router.get('/',async(req,res)=>{
    const listOfTests=await test_description.findAll();
    res.json(listOfTests);
});

       router.post("/", async (req, res) => {
     const post = req.body;
     await test_description.create(post);
    res.json(post);
   });


module.exports=router;