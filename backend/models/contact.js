const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, // this field is required
  },
  lastName: {
    type: String,
    required: true, // this field is required
  },
  phone: {
    type: String,
    required: true, // this field is required
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
