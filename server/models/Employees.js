
const mongoose = require('mongoose'); 

const employeesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },

degination:{
        type:String,
        required:true,
        trim: true
    },

email:{
        type:String,
        required:true,
        trim: true, 
        unique:true
    },

phone:{
        type:Number,
        required:true,
        trim: true, 
        unique:true,
        length: [11, " 11 characters long"] 
    },

createDate:{
    type:Date,
    default: Date.now
}
   
})

module.exports = mongoose.model('employeesList', employeesSchema);