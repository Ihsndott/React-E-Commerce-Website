const express = require("express");
const router = express.Router();

const {payment,sendEmail} = require("../controllers/payment.controller");

router.post("/checkout",payment);
router.post("/send-email",sendEmail);

module.exports = router;