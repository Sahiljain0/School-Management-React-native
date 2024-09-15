const mongoose = require('mongoose');

const administratorSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'teacher', 'parent'],
    default: 'admin',
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  // Add other fields as needed for administrator information
});

const Administrator = mongoose.model('Administrator', administratorSchema);

module.exports = Administrator;
