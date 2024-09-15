const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parent',
    required: true,
  },
  studentId: {
    type: String,
  },
  studentName: {
    type: String,
  },
  className: {
    type: String,
  },
  rollNumber: {
    type: String,
  },
});

const Child = mongoose.model('Child', childSchema);

module.exports = Child;
