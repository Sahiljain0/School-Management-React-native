const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  attendance: {
    type: Boolean,
    default:false,
  },
  address: String,
  mobile: {
    type: String,
    required: true,
  },
  student_id: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  enrolledClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
  },
  parentNumber: String,
});

const Students = mongoose.model('Students', studentSchema);

module.exports = Students;

