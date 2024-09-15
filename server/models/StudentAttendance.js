const mongoose = require('mongoose');
const Students = require('./Students');

const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Students', // Reference to the Student model
    required: true,
  },
  date: {
    type: Date,
    default: new Date().toISOString().split('T')[0],
  },
  present: {
    type: Boolean,
    default: false, // Default to false, meaning absent
  },
});

const StudentAttendance = mongoose.model('Attendance', attendanceSchema);

module.exports = StudentAttendance;

  