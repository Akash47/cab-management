const asyncHandler = require('express-async-handler');
const { saveAdmin,getAllAdmin } = require('../services/admin.service');
// Admin login
module.exports.saveAdmin = asyncHandler(async(req, res) => {
    const { lastName, firstName,address, email, mobileNumber, password} = req.body;
    const result = await saveAdmin(lastName, firstName,address, email, mobileNumber, password);
    if (result) { 
        res.status(200);
        res.json({"msg":"Registered Successfully."});
    }
    else {
      res.status(401);
      throw new Error(matchResult[1]);
    }
});

module.exports.getAllAdmin = asyncHandler(async(req, res) => {
  // const { lastName, firstName,address, email, mobileNumber, password} = req.body;
  const result = await getAllAdmin();
  if (result) { 
      res.status(200);
      res.json({data:result});
  }
  else {
    res.status(401);
    throw new Error(matchResult[1]);
  }
});