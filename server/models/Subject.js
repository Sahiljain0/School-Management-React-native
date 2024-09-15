const mongoose = require('mongoose');

// Subject schema (as provided in the previous example)
const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  grades: {
    type: [Number],
    default: [],
  },
  
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports =  Subject;
// Class schema




