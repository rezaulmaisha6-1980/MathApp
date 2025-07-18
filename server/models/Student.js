
// server/models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

fatherName: {
    type: String,
    required: true,
    trim: true
  },


  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('StudentList', studentSchema);