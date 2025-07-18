
const express = require('express'); 

const router = express.Router(); 

const StudentInfo = require('../models/StudentInfo');

const multer = require("multer");

const path = require("path");


//file upload 
const storage = multer.diskStorage({
destination:'./studentInfos/', 
filename:(req,file,cb)=>{

    cb(null, Date.now() + path.extname(file.originalname)); 
}, 
}); 

const studentInfo = multer({storage}); 



// create studentInfo

router.post('/', studentInfo.single('picture'), async(req,res)=>    
{
try {
    const allStudentInfo= new StudentInfo({
...req.body,
picture:req.file.filename,
    }); 

    await allStudentInfo.save(); 

    res.status(200).json({message:'Student saved'} ); 

} catch (error) {
   res.status(500).json({error:error.message});

}

});

//get all student

router.get('/', async(req,res)=>{
const student = await StudentInfo.find(); 
res.json(student)

})

module.exports = router; 
