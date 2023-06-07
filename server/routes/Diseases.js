const express=require('express');
const router=express.Router();

const {Diseases} = require("../models");

router.get('/',async(req,res)=>{
    const listOfDiseases=await Diseases.findAll();
    res.json(listOfDiseases);
});




module.exports=router;