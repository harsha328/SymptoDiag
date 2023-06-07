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

// POST a new credential
router.post('/', async(req, res) => {
  const post = req.body;
  await Credentials.create(post)
  res.json(post);
    
});

module.exports = router;
