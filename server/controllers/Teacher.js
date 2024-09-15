const mongoose = require('mongoose');
const Teacher = require('../models/Teacher');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Controller to get all teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get a specific teacher by ID
exports.getTeacherById = async (req, res) => {
  const teacherId = req.params.id;

  try {
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to create a new teacher
exports.createTeacher = async (req, res) => {
  const { name, email, password, subjects, classes } = req.body;

  try {
    const newTeacher = new Teacher({
      name,
      email,
      password,
      subjects,
      classes,
    });

    const checkExistance = await Teacher.findOne({email});
        if(checkExistance){
            return res.status(401).json({
                success:false,
                message:"Account already exist with this email adress"
            });
        }


        // otp wala section reh gaya he
            const hashedpassword = await bcrypt.hash(password,10);

        

        const savedData = await Teacher.create({
          name,
      email,
      password:hashedpassword,
      subjects,
      classes,
        });
        console.log("Data save succesfully");

        return res.status(200).json({
            success:true,
            message:"data Saved successfully",
            data:savedData

        });
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// Controller to update a teacher by ID
exports.updateTeacherById = async (req, res) => {
  const teacherId = req.params.id;
  const { name, email, password, subjects, classes } = req.body;

  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      teacherId,
      { name, email, password, subjects, classes },
      { new: true } // Return the modified document
    );

    if (!updatedTeacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }

    res.json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to delete a teacher by ID
exports.deleteTeacherById = async (req, res) => {
  const teacherId = req.params.id;

  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);

    if (!deletedTeacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }

    res.json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.parentLogin=async(req,res)=>{
  try{

      const {email,password} = req.body;

      let isUser = await Teacher.findOne({email});
      if(!isUser){
          return res.status(401).json({
              success:false,
              message:"No User Exist"
          })
      }
      const checkPassword = await bcrypt.compare(password,isUser.password);
      if(checkPassword){

          const payload = {
              email:isUser.email,
              id:isUser._id,
              role:isUser.role
          }

          const token = jwt.sign(payload,"vishalmeena",{expiresIn:"22h"});

          isUser = isUser.toObject()
          isUser.token = token;
          isUser.password = undefined;
          console.log("login sucessfully");
          return res.cookie("token",token,{expires:new Date(Date.now()+ 24*60*60*1000),httpOnly:true}).status(200).json({
              success:true,
              message:"login successfull",
              user:isUser
          })
      }else{
          return res.status(401).json({
              success:false,
              message:"Wrong password"
          })
      }


  }
  catch(error){
      return res.status(401).json({
          success:false,
          message:`error when try to log in ${error.message}`
      })

  }
}

