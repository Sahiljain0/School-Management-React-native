const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'teacher', 'parent'],
    default: 'teacher', // Default role for new users
  },
  // You can include other fields specific to a teacher
  // For example:
  subjects: [String], // Array of subjects they teach
  classes: [String],  // Array of classes they handle
  // ... other fields as needed
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
