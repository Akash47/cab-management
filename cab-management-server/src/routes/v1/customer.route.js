const express = require('express');
const {
    saveCustomer,getCustomer
} = require('../../controllers/customer.controller');


const router = express.Router();

router.post('/customer', saveCustomer);
router.get('/customer', getCustomer);

module.exports = router;