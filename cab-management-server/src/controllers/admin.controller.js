const asyncHandler = require('express-async-handler');
const { matchPassword } = require('../services/admin.service');
// Admin login
module.exports.adminLogin = asyncHandler(async(req, res) => {
    const { email, password,user_type } = req.body;
    const matchResult = await matchPassword(email,password,user_type);
    if (matchResult[0] & matchResult[2]==="200") { //Check password match and status is 200
        res.status(200);
        res.json({ "msg":matchResult[1]});
    }
    else if (matchResult[0]===false & matchResult[2]==="404") { //Check email is not found and status is 404
      res.status(404);
      throw new Error(matchResult[1]);
    }
    else if (matchResult[0]=false & matchResult[2]==="401") {   //Check password do not match and status is 401
      res.status(401);
      throw new Error(matchResult[1]);
    }
    else {
      res.status(401);
      throw new Error(matchResult[1]);
    }
});

