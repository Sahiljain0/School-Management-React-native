const express = require("express");
const router  = express.Router();
const {authenticateUser,checkIfParent,checkIfTeacher,checkIfAdmin} = require('../middlewares/auth');

const {signUp,login} = require('../controllers/Auth');
const {markAttendance,
    getAttendance,} = require('../controllers/Attendence');
const {createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent} = require('../controllers/Student');
const {getAllParents,
    getParentById,
    createParent,
    updateParentById,
    deleteParentById,parentLogin} = require('../controllers/Parent');
const {createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent} = require('../controllers/Event');
const {getAllSubjects,
    getSubjectsByStudent,
    getSubjectById,
    createSubject} = require('../controllers/Subject');
const {getAllClasses,
    getClassById,
    createClass} = require('../controllers/Class');



const {createQuizQuestion, getAllQuizQuestions } = require('../controllers/Quiz');

    
router.post('/signup',signUp);
router.post('/parentLogin',parentLogin);

// attendense

router.post('/markAttendance',markAttendance);
router.get('/getAttendance:studentId',getAttendance);

// student
router.post('/createStudent',authenticateUser,createStudent);
router.get('/getStudentById',authenticateUser,getStudentById);
router.get('/Students',authenticateUser,getAllStudents);
// router.get('/updateStudent',updateStudent);
// router.get('/deleteStudent',deleteStudent);

// parent
router.post('/createParent',createParent);
router.get('/getAllParents',getAllParents);
router.get('/getParentById',getParentById);
router.get('/updateParentById',updateParentById);
router.get('/deleteParentById',deleteParentById);

// event
router.post('/createEvent',createEvent);
router.get('/getAllEvents',getAllEvents);
router.get('/getEventById',getEventById);
router.post('/createEvent',createEvent);
router.post('/createEvent',createEvent);


// subjects
router.get('/getAllSubjects',getAllSubjects);
router.get('/getSubjectsByStudent',getSubjectsByStudent);
router.get('/getSubjectById',getSubjectById);
router.post('/createSubject',createSubject);
// class
router.get('/getAllClasses',getAllClasses);
router.get('/getClassById',getClassById);
router.post('/createClass',createClass);

// quiz

router.post('/createQuizQuestion',createQuizQuestion);
router.get('/getAllQuizQuestions',getAllQuizQuestions);



module.exports=router;