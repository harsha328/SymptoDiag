const express=require('express');
const router=express.Router();

const {Test_description} = require("../models");

router.get('/',async(req,res)=>{
    const listOfTest_description=await Test_description.findAll();
    res.json(listOfTest_description);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await Test_description.create(post);
    res.json(post);
  });


module.exports=router;