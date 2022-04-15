const asyncHandler = require('express-async-handler');
const { matchPassword } = require('../services/admin.service');
// Admin login
module.exports.adminLogin = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    if (!admin) {
      res.status(401);
      throw new Error('Please enter the correct email');
    }

    if (await matchPassword(email,password)) {
       res.status(200);
  } else {
    res.status(401);
    throw new Error('Incorrect password');
  }
});

