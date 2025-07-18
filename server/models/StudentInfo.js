
const mongoose = require('mongoose'); 

const studentInfoSchema = new mongoose.Schema({
name:String,
class: String,
roll:Number,
fatherName:String,
motherName:String,
birthday: Date,
birthCertificate: String,
mobile: String,
picture:String
}); 


module.exports = mongoose.model('studentInfo', studentInfoSchema);