const mongoose = require('mongoose');
const Administrator = require('../models/administratorModel');

// Controller to get all administrators
const getAllAdministrators = async (req, res) => {
  try {
    const administrators = await Administrator.find();
    res.json(administrators);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get a specific administrator by ID
const getAdministratorById = async (req, res) => {
  const administratorId = req.params.id;

  try {
    const administrator = await Administrator.findById(administratorId);
    if (!administrator) {
      return res.status(404).json({ error: 'Administrator not found' });
    }
    res.json(administrator);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to create a new administrator
const createAdministrator = async (req, res) => {
  const { username, password, email, fullName } = req.body;

  try {
    const newAdministrator = new Administrator({
      username,
      password,
      email,
      fullName,
    });

    const savedAdministrator = await newAdministrator.save();
    res.status(201).json(savedAdministrator);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// Controller to update an administrator by ID
const updateAdministratorById = async (req, res) => {
  const administratorId = req.params.id;
  const { username, password, email, fullName } = req.body;

  try {
    const updatedAdministrator = await Administrator.findByIdAndUpdate(
      administratorId,
      { username, password, email, fullName },
      { new: true } // Return the modified document
    );

    if (!updatedAdministrator) {
      return res.status(404).json({ error: 'Administrator not found' });
    }

    res.json(updatedAdministrator);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to delete an administrator by ID
const deleteAdministratorById = async (req, res) => {
  const administratorId = req.params.id;

  try {
    const deletedAdministrator = await Administrator.findByIdAndDelete(administratorId);

    if (!deletedAdministrator) {
      return res.status(404).json({ error: 'Administrator not found' });
    }

    res.json({ message: 'Administrator deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllAdministrators,
  getAdministratorById,
  createAdministrator,
  updateAdministratorById,
  deleteAdministratorById,
};
