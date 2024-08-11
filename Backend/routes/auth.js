const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();

// Ensure 'uploads' directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 1 MB
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images only!');
        }
    }
});

// Register a new user
router.post('/Registration', upload.single('profilePic'), async (req, res) => {
    try {
        const { name, email, contactNo, dob, city, password } = req.body;
        const profilePic = req.file ? req.file.filename : null;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send({ message: 'User already exists' });
        }

        // // Hash the password
        // const hashedPassword = await bcrypt.hash(password, 10);
        // console.log({hashedPassword})
        // Create a new user
        const newUser = new User({
            profilePic,
            name,
            email,
            contactNo,
            dob,
            city,
            password: password,
        });

        // Save the user to the database
        await newUser.save();
        
        res.status(201).send({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).send({ message: 'Error registering user', error: error.message });
    }
});

// Login user
router.post('/Login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body)
        // Find the user by email
        const user = await User.findOne({ email });
        console.log({user})
        if (!user) {
            return res.status(401).send({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log(isPasswordValid)
        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid email or password' });
        }
        console.log(process.env.JWT_SECRET )
        // Create a JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).send({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).send({ message: 'Error logging in', error: error.message });
    }
});

module.exports = router;
