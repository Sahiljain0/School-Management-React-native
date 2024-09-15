const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
  // Get the token from the request headers or cookies
  const token =  req.body.token;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - No token provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'vishalmeena'); // Replace 'your-secret-key' with your actual secret key

    // Attach the decoded user information to the request for future use
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized - Invalid token' });
  }
};


// routeSpecificMiddleware.js
exports.checkIfParent = (req, res, next) => {
    if (req.user.role !== 'parent') {
      return res.status(403).json({ error: 'Forbidden - Only parent can access this route' });
    }
    next();
  };
  


  exports.checkIfTeacher = (req, res, next) => {
    if (req.user.role !== 'teacher') {
      return res.status(403).json({ error: 'Forbidden - Only teacher can access this route' });
    }
    next();
  };
  

  exports.checkIfAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden - Only admins can access this route' });
    }
    next();
  };
  
  