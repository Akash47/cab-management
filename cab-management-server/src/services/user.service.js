const {pool} = require('../config/db.js');


module.exports.matchPassword= async(email,password,user_type) => {
    try {
        let conn;
        conn = await pool.getConnection(); 
        const resPassword = await conn.query("SELECT password FROM "+user_type+" WHERE EMAIL = '"+email+"'"); //Get password for user entered email
        if(resPassword.length === 1){  //Check whether above query return any record or not
            if(password === resPassword[0].password)         //match database password with user entered password
            {
                return [true,"Login Successfully.","200"];
            }
            else{
                return [false,"Please enter correct password.","401"];
            }
        }
        else{
            return [false,"This email id is not registered.","404"];
        }     
    } 
    catch (error) {
        return [null, error,""];
    }
};
