import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizData] = useState([
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which gas do plants absorb from the atmosphere?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Methane'],
      correctAnswer: 'Carbon Dioxide',
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'O2', 'NaCl'],
      correctAnswer: 'H2O',
    },
    // Add more questions as needed
]);
  const [answerFeedback, setAnswerFeedback] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
      setAnswerFeedback('Correct!');
    } else {
      setAnswerFeedback(`Wrong. The correct answer is ${correctAnswer}.`);
    }
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const renderQuizQuestion = () => {
    const questionData = quizData[currentQuestion];
    return (
      <View>
        <Text style={styles.question}>{questionData.question}</Text>
        {questionData.options.map((option, index) => (
          <Button
            key={index}
            title={option}
            onPress={() => handleAnswer(option)}
          />
        ))}
        {answerFeedback && <Text style={styles.answerFeedback}>{answerFeedback}</Text>}
      </View>
    );
  };

  const renderQuizResults = () => {
    return (
      <View>
        <Text style={styles.result}>Your Score: {score} / {quizData.length}</Text>
        {quizData.map((question, index) => (
          <View key={index} style={styles.questionFeedback}>
            <Text style={styles.question}>{question.question}</Text>
            <Text style={styles.answerFeedback}>
              Your Answer: {answerFeedback === 'Correct!' ? 'N/A' : quizData[index].options.find((option) => option !== quizData[index].correctAnswer)}
            </Text>
            <Text style={styles.correctAnswer}>
              Correct Answer: {quizData[index].correctAnswer}
            </Text>
          </View>
        ))}
        <Button
          title="Retry Quiz"
          onPress={() => {
            setCurrentQuestion(0);
            setScore(0);
            setAnswerFeedback(null);
            setQuizCompleted(false);
          }}
        />
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Subject Quiz</Text>
      {quizCompleted ? renderQuizResults() : renderQuizQuestion()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  answerFeedback: {
    fontSize: 16,
    color: 'red',
    marginBottom: 5,
  },
  correctAnswer: {
    fontSize: 16,
    color: 'green',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
    marginBottom: 10,
  },
  questionFeedback: {
    marginBottom: 20,
  },
});

export default QuizScreen;
