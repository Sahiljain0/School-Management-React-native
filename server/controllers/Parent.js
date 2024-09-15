const Parent = require('../models/Parent');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Controller to get all parents
exports.getAllParents = async (req, res) => {
  try {
    const parents = await Parent.find();
    res.json(parents);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get a specific parent by ID
exports.getParentById = async (req, res) => {
  const parentId = req.params.id;

  try {
    const parent = await Parent.findById(parentId);
    if (!parent) {
      return res.status(404).json({ error: 'Parent not found' });
    }
    res.json(parent);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to create a new parent
exports.createParent = async (req, res) => {
  const { name, email, password, children } = req.body;

  try {
    const newParent = new Parent({
      name,
      email,
      password,
      children,
    });


    const checkExistance = await Parent.findOne({email});
        if(checkExistance){
            return res.status(401).json({
                success:false,
                message:"Account already exist with this email adress"
            });
        }


        // otp wala section reh gaya he
            const hashedpassword = await bcrypt.hash(password,10);

        

        const savedData = await Parent.create({
          name,
          email,
          password:hashedpassword,
          children,
        });
        console.log("Data save succesfully");

        return res.status(200).json({
            success:true,
            message:"data Saved successfully",
            data:savedData

        });
    // const savedParent = await newParent.save();
    // res.status(201).json(savedParent);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' ,message:error});
  }
};

// Controller to update a parent by ID
exports.updateParentById = async (req, res) => {
  const parentId = req.params.id;
  const { name, email, password, children } = req.body;

  try {
    const updatedParent = await Parent.findByIdAndUpdate(
      parentId,
      { name, email, password, children },
      { new: true } // Return the modified document
    );

    if (!updatedParent) {
      return res.status(404).json({ error: 'Parent not found' });
    }

    res.json(updatedParent);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to delete a parent by ID
exports.deleteParentById = async (req, res) => {
  const parentId = req.params.id;

  try {
    const deletedParent = await Parent.findByIdAndDelete(parentId);

    if (!deletedParent) {
      return res.status(404).json({ error: 'Parent not found' });
    }

    res.json({ message: 'Parent deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.parentLogin=async(req,res)=>{
  try{

      const {email,password} = req.body;

      let isUser = await Parent.findOne({email});
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