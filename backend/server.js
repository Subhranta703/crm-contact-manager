require('dotenv').config();  // Make sure this is at the very top

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');  // Ensure this path is correct

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));  // Allowing CORS for frontend running at http://localhost:3000

// Register the contact routes
app.use('/api', contactRoutes);  // This will make your endpoint accessible as /api/contacts

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log('Database connection error:', err));

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
