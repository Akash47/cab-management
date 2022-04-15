const asyncHandler = require('express-async-handler');
const { matchPassword } = require('../services/admin.service');
// Admin login
module.exports.adminLogin = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    if (await matchPassword(email,password)) {
      res.status(200);
      res.json({ "msg":"able to login successfully"});
  } else {
    res.status(401);
    throw new Error('Incorrect password');
  }
});

