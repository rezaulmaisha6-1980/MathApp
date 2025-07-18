
const express = require("express");

const router = express.Router();

router.post ('/', (req,res)=>{
    const { side} = req.body;
    const area = (side*side).toFixed(3);
    res.json({area});
});


module.exports= router; 