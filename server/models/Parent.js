const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
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
  children: [
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Students', // Reference to the Student model
        required: true,
      },
    },
  ],
  role: {
    type: String,
    enum: ['admin', 'teacher', 'parent'],
    default: 'parent', // Default role for new users
  },
  
  registrationDate: {
    type: Date,
    default: new Date().toISOString().split('T')[0],
  },
 
});

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;
