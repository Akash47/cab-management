const express = require('express');
const {
    saveDriver,getAllDriver
} = require('../../controllers/driver.controller');


const router = express.Router();

router.post('/saveDriver', saveDriver);
router.get('/getAllDriver', getAllDriver);

module.exports = router;