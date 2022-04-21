const {pool} = require('../config/db.js');


module.exports.saveDriver= async(lastName, firstName,address, email, mobileNumber, password) => {
    try {
        let conn;
        conn = await pool.getConnection();
        const rows = await conn.query("INSERT INTO DRIVER(last_Name,first_Name,address, email,mobile_Number,password,is_active) VALUES (?,?,?,?,?,?,?)",[lastName, firstName,address, email, mobileNumber, password,true]); //Insert Driver
        return true;
    } 
    catch (error) {
        console.log(error)
        return [null, error,""];
    }
};

module.exports.getAllDriver= async() => {
    try {
        let conn;
        conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM DRIVER"); //Get All Driver
        console.log(rows);
        return rows;
    } 
    catch (error) {
        console.log(error)
        return [null, error,""];
    }
};