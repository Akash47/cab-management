const {pool} = require('../config/db.js');


module.exports.saveAdmin= async(lastName, firstName,address, email, mobileNumber, password) => {
    try {
        let conn;
        conn = await pool.getConnection();
        const rows = await conn.query("INSERT INTO ADMIN(last_Name,first_Name,address, email,mobile_Number,password) VALUES (?,?,?,?,?,?)",[lastName, firstName,address, email, mobileNumber, password]); //Insert ADMIN
        return true;
    } 
    catch (error) {
        console.log(error)
        return [null, error,""];
    }
};

module.exports.getAllAdmin= async() => {
    try {
        let conn;
        conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM ADMIN"); //Get All ADMIN
        console.log(rows);
        return rows;
    } 
    catch (error) {
        console.log(error)
        return [null, error,""];
    }
};