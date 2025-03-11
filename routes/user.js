const express = require('express');
const USER = require('../controllers/customer');

const router = express.Router();
router.get('/memberships', USER.getMemberships)
router.post("/customer",USER.addCustomer);
router.put('/editCustomer/:id', USER.editCustomer)
router.get('/customers', USER.getCustomers)
router.delete('/deleteCustomer/:id', USER.deleteCustomer)

module.exports = router;
