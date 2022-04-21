const express = require('express');
const {
    saveCab , getAllCab
} = require('../../controllers/cab.controller');


const router = express.Router();

router.post('/saveCab', saveCab);
router.get('/getAllCab', getAllCab);

module.exports = router;