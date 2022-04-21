const asyncHandler = require('express-async-handler');
const { saveDriver,getAllDriver } = require('../services/driver.service');
// Admin login
module.exports.saveDriver = asyncHandler(async(req, res) => {
    const { lastName, firstName,address, email, mobileNumber, password} = req.body;
    const result = await saveDriver(lastName, firstName,address, email, mobileNumber, password);
    if (result) { 
        res.status(200);
        res.json({"msg":"Registered Successfully."});
    }
    else {
      res.status(401);
      throw new Error(matchResult[1]);
    }
});

module.exports.getAllDriver = asyncHandler(async(req, res) => {
  // const { lastName, firstName,address, email, mobileNumber, password} = req.body;
  const result = await getAllDriver();
  if (result) { 
      res.status(200);
      res.json({data:result});
  }
  else {
    res.status(401);
    throw new Error(matchResult[1]);
  }
});