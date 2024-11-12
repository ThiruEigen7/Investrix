const express = require('express');
const router = express.Router();
const User = require('../models/user.jsx'); // User model

// Register route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Save user to database (you might want to hash password for security)
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', token: 'yourTokenHere' }); // Replace with JWT token logic if needed
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

module.exports = router;
