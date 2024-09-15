const Subject  = require('../models/Subject');

// Get all subjects
const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find().populate('student');
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get subjects for a specific student
const getSubjectsByStudent = async (req, res) => {
  const { studentId } = req.params;
  try {
    const subjects = await Subject.find({ student: studentId }).populate('student');
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get details of a specific subject by ID
const getSubjectById = async (req, res) => {
  const { subjectId } = req.params;
  try {
    const subject = await Subject.findById(subjectId).populate('student');
    res.json(subject);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new subject
const createSubject = async (req, res) => {
  const { name, code, student } = req.body;
  try {
    const newSubject = new Subject({ name, code, student });
    await newSubject.save();
    res.status(201).json(newSubject);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllSubjects,
  getSubjectsByStudent,
  getSubjectById,
  createSubject,
};
