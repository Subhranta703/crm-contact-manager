const express = require('express');
const router = express.Router();

// POST /api/contacts
router.post('/contacts', (req, res) => {
  const { name, email, message } = req.body;
  
  // Simulate saving contact to a database
  console.log('Contact received:', { name, email, message });

  res.status(201).json({ message: 'Contact saved successfully!' });
});

module.exports = router;
