
const express = require("express");

const router = express.Router();

router.post('/',(req,res)=>{
    const { sd, ld}= req.body;
    const area = 0.5* sd * ld;
    res.json({area});
});



module.exports = router; 