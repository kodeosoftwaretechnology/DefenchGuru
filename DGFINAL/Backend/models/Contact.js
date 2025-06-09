const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneCode: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  termsAccepted: { type: Boolean, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);
