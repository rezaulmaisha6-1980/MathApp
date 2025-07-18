
const express = require('express');

const router = express.Router(); 
const Employees = require('../models/Employees');

router.post('/', async (req, res)=>{
    const {name, degination, email, phone}= req.body; 

    const newEmployees = new Employees({name, degination, email, phone});
    await newEmployees.save(); 
     res.json({message:' Employees are added'}); 
})

router.get('/', async (req, res) => {
  try {
    const employees  = await Employees.find().sort({ createdAt: -1 });
    res.send(employees);
   
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;