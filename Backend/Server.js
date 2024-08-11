require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Adjust path as necessary
const app = express();

// Middleware
app.use(express.json()); // Built-in body parser for JSON
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded files statically
app.use(express.urlencoded({ extended: true }));
console.log('JWT_SECRET:', process.env.JWT_SECRET);

//app.use(cors()); // Use CORS
app.use(cors({
   origin: '*',
  //  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
}));

// For handling file uploads via FormData
const multer = require('multer');
const upload = multer();
// app.use(upload.none());
// 
// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userinfo")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

 // Routes
app.use('/api/auth', authRoutes); 

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
