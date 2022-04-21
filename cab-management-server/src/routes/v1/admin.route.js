const express = require('express');
const {
    saveAdmin,getAllAdmin
} = require('../../controllers/admin.controller');


const router = express.Router();

router.post('/saveAdmin', saveAdmin);
router.get('/getAllAdmin', getAllAdmin);

module.exports = router;