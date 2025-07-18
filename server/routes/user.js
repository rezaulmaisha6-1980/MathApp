
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { name, emailOrPhone, password } = req.body;

  const userExists = await User.findOne({ emailOrPhone });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const newUser = new User({ name, emailOrPhone, password });
  await newUser.save();
  res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', async (req, res) => {
  const { emailOrPhone, password } = req.body;
  const user = await User.findOne({ emailOrPhone, password });

  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  res.json({ message: 'Login successful', user });
});

module.exports = router;
