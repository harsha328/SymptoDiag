const express = require('express');
const router = express.Router();
const { Credentials } = require('../models');

// GET all credentials
router.get('/', (req, res) => {
  Credentials.findAll()
    .then((credentials) => {
      res.json(credentials);
    })
   
});

router.post('/', async(req, res) => {
  const post = req.body;
  const authState=await Credentials.findOne({where:{user_id:post.user_id}})
  if(authState==null){
    await Credentials.create(post)
    res.json({existing:false});

  }
  else{
    res.json({existing:true})
  }
    
});
    

router.get('/auth',async(req,res)=>{
  const authState=await Credentials.findOne({where:{user_id:req.body.user_id,password:req.body.password}})
  if(authState==null){
   res.json({existing:false});
   console.log(req.body,"error")
  }
  else{
   res.json({existing:true});
   console.log(req.body)
  }
 })

module.exports = router;
