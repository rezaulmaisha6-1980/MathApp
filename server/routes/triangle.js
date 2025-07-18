
const express = require("express");

const router = express.Router();

router.post("/",(req,res)=>{
    const { base, height} = req.body;
    const area = 0.5* base * height ;
    res.json({area}); 
 }); 

 module.exports = router; 