const Quiz = require('../models/Quiz'); // Import the Quiz model

// Controller function to create a new quiz question
const createQuizQuestion = async(req, res) => {
  
  try{

  const { question, options, correctAnswer } = req.body;

  const newQuizQuestion = new Quiz({
    question,
    options,
    correctAnswer,
  });

  const responce  = await newQuizQuestion.save();
  res.status(200).json(responce);
}catch(err){
      console.error('Error saving quiz question:', err);
      res.status(500).json({ error: 'Failed to save quiz question' });
  }
};

// Controller function to retrieve all quiz questions
const getAllQuizQuestions = async(req, res) => {
  try {
    const quiz = await Quiz.find({});
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};

module.exports = { createQuizQuestion, getAllQuizQuestions };
