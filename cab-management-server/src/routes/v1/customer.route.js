const express = require('express');
const {
    saveCustomer,getCustomer
} = require('../../controllers/customer.controller');


const router = express.Router();

router.post('/saveCustomer', saveCustomer);
router.get('/getAllCustomer', getCustomer);

module.exports = router;