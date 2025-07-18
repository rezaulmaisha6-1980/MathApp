
const express = require("express");

const router = express.Router();

router.post('/',(req,res)=>{
    const { length, width}= req.body;
    const area = length* width; 
    res.json({area});
});


module.exports = router; 
