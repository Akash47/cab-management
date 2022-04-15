const {pool} = require('../config/db.js');


module.exports.matchPassword = async() => {
    try {
        let conn;
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT 1 as val");
        console.log(rows); 
        return true
    } catch (error) {
        return [null, error];
    }
};
