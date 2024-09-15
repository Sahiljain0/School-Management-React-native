const  Class  = require('../models/Class');

// Get all classes
const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate('subjects');
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific class by ID
const getClassById = async (req, res) => {
  const { classId } = req.params;
  try {
    const classInfo = await Class.findById(classId).populate('subjects');
    res.json(classInfo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new class
const createClass = async (req, res) => {
  const { name, subjects } = req.body;
  try {
    const newClass = new Class({ name, subjects });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllClasses,
  getClassById,
  createClass,
};
