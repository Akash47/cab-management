const {pool} = require('../config/db.js');


module.exports.insertCustomer= async(lastName, firstName,address, email, mobileNumber, password) => {
    try {
        let conn;
        conn = await pool.getConnection();
        const rows = await conn.query("INSERT INTO CUSTOMER(last_Name,first_Name,address, email,mobile_Number,password,is_active) VALUES (?,?,?,?,?,?,?)",[lastName, firstName,address, email, mobileNumber, password,true]); //Insert Customer
        console.log(rows);
        return true;
    } 
    catch (error) {
        console.log(error)
        return [null, error,""];
    }
};

module.exports.getCustomer= async() => {
    try {
        let conn;
        conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM CUSTOMER"); //Insert Customer
        console.log(rows);
        return rows;
    } 
    catch (error) {
        console.log(error)
        return [null, error,""];
    }
};