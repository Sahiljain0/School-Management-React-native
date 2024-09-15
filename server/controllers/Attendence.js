const Attendance = require('../models/StudentAttendance');

// Controller to mark attendance
const markAttendance = async (req, res) => {
  try {
    const { studentId, date, present } = req.body;

    // Check if an attendance record already exists for the same student on the same date
    const currentDate = new Date().toISOString().split('T')[0];

    const existingAttendance = await Attendance.findOne({ studentId, date: currentDate });
    
    if (existingAttendance) {
      return res.status(409).json({ error: 'Attendance already marked for this student today.' });
    }
    
    // Proceed to mark attendance and store the record in the database
    // ...
    

    const attendance = new Attendance({
      studentId: studentId,
      date,
      present,
    });

    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error marking attendance' });
  }
};

// Controller to get attendance
const getAttendance = async (req, res) => {
  try {
    console.log(req.params.studentId)
    const studentId = req.params.studentId;
    const attendances = await Attendance.find({ studentId: studentId }).populate("studentId").exec();

    res.json(attendances);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting attendance' });
  }
};

module.exports = {
  markAttendance,
  getAttendance,
};
