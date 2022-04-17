const asyncHandler = require('express-async-handler');
const { insertCustomer } = require('../services/customer.service');
// Admin login
module.exports.customer = asyncHandler(async(req, res) => {
    const { lastName, firstName,address, email, mobileNumber, password} = req.body;
    const result = await insertCustomer(lastName, firstName,address, email, mobileNumber, password);
    if (result) { 
        res.status(200);
        res.json({"msg":"Registered Successfully."});
    }
    else {
      res.status(401);
      throw new Error(matchResult[1]);
    }
});