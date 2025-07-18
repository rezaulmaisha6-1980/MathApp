
// server/routes/students.js
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// নতুন student তৈরি
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// সব students পড়া
router.get('/', async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;