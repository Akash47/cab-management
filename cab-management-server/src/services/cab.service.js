const {pool} = require('../config/db.js');


module.exports.saveCab= async(registration_no,car_brand,model,seater,color,city,fuel_type,per_KM_charge,admin_id) => {
    try {
        let conn;
        conn = await pool.getConnection();
        const rows = await conn.query("INSERT INTO CAB(registration_no,car_brand,model,seater,color,city,fuel_type,per_KM_charge,admin_id) VALUES (?,?,?,?,?,?,?,?,?)",[registration_no,car_brand,model,seater,color,city,fuel_type,per_KM_charge,admin_id]); //Insert CAB
        return true;
    } 
    catch (error) {
        console.log(error)
        return [null, error,""];
    }
};

module.exports.getAllCab= async() => {
    try {
        let conn;
        conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM CAB"); //Get ALL Cab
        console.log(rows);
        return rows;
    } 
    catch (error) {
        console.log(error)
        return [null, error,""];
    }
};