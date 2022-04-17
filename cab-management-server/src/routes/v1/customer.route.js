const express = require('express');
const {
    customer
} = require('../../controllers/customer.controller');


const router = express.Router();

router.post('/customer', customer);

module.exports = router;