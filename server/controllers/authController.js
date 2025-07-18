
const User =require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


exports.register = async (req,res)=>{

const { name, email, phone, password }= req.body; 
try {
    const existingUser = await User.findOne({email}); 

    if(existingUser) return res.status(400).json({msg:'User already exists'}); 

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({name, email, phone, password: hashedPassword}); 

await user.save(); 

res.status(201).json({msg:"User register successfully"})

} catch (error) {
    
    res.status(500).json({msg:'server  error'});
}

}; 




exports.login = async(req,res)=>{

const {email, password} = req.body;
try {
    

    const user = await User.findOne({email}); 
    if(!user) return res.status(400).json({msg:'Invalid user'});

    const isMatch = await bcrypt.compare(password, user.password);

if(!isMatch) return res.status(400).json({msg:"Invalid user"})

    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:'10d'}); 

res.json({token, user:{id:user._id, name: user.name, email: user.email}}); 

} catch (error) {
    res.status(500).json ({msg:'Server error'});
}

}; 