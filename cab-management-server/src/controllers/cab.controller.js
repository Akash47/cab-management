const asyncHandler = require('express-async-handler');
const { saveCab,getAllCab } = require('../services/cab.service');
// Admin login
module.exports.saveCab = asyncHandler(async(req, res) => {
    const { registration_no,car_brand,model,seater,color,city,fuel_type,per_KM_charge,admin_id} = req.body;
    const result = await saveCab(registration_no,car_brand,model,seater,color,city,fuel_type,per_KM_charge,admin_id);
    if (result) { 
        res.status(200);
        res.json({"msg":"Registered Successfully."});
    }
    else {
      res.status(401);
      throw new Error(matchResult[1]);
    }
});

module.exports.getAllCab = asyncHandler(async(req, res) => {
  // const { lastName, firstName,address, email, mobileNumber, password} = req.body;
  const result = await getAllCab();
  if (result) { 
      res.status(200);
      res.json({data:result});
  }
  else {
    res.status(401);
    throw new Error(matchResult[1]);
  }
});