const mongoose = require('mongoose');
const QuizPerformance = require('../models/QuizPerformance');
const Student = require('../models/Student');
const Quiz = require('../models/Quiz');

// Controller to get all quiz performances
const getAllQuizPerformances = async (req, res) => {
  try {
    const quizPerformances = await QuizPerformance.find();
    res.json(quizPerformances);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get quiz performance by ID
const getQuizPerformanceById = async (req, res) => {
  const quizPerformanceId = req.params.id;

  try {
    const quizPerformance = await QuizPerformance.findById(quizPerformanceId);
    if (!quizPerformance) {
      return res.status(404).json({ error: 'Quiz performance not found' });
    }
    res.json(quizPerformance);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to create quiz performance
const createQuizPerformance = async (req, res) => {
  const { studentId, quizId, score } = req.body;

  try {
    // Check if the student and quiz exist
    const student = await Student.findById(studentId);
    const quiz = await Quiz.findById(quizId);

    if (!student || !quiz) {
      return res.status(404).json({ error: 'Student or Quiz not found' });
    }

    const newQuizPerformance = new QuizPerformance({
      studentId,
      quizId,
      score,
    });

    const savedQuizPerformance = await newQuizPerformance.save();
    res.status(201).json(savedQuizPerformance);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// Controller to update quiz performance by ID
const updateQuizPerformanceById = async (req, res) => {
  const quizPerformanceId = req.params.id;
  const { studentId, quizId, score } = req.body;

  try {
    const updatedQuizPerformance = await QuizPerformance.findByIdAndUpdate(
      quizPerformanceId,
      { studentId, quizId, score },
      { new: true } // Return the modified document
    );

    if (!updatedQuizPerformance) {
      return res.status(404).json({ error: 'Quiz performance not found' });
    }

    res.json(updatedQuizPerformance);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to delete quiz performance by ID
const deleteQuizPerformanceById = async (req, res) => {
  const quizPerformanceId = req.params.id;

  try {
    const deletedQuizPerformance = await QuizPerformance.findByIdAndDelete(quizPerformanceId);

    if (!deletedQuizPerformance) {
      return res.status(404).json({ error: 'Quiz performance not found' });
    }

    res.json({ message: 'Quiz performance deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllQuizPerformances,
  getQuizPerformanceById,
  createQuizPerformance,
  updateQuizPerformanceById,
  deleteQuizPerformanceById,
};
