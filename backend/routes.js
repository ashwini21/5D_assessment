const express = require('express');
const router = express.Router();
const authRouter = require('./component/auth/auth.user.route');
const momentRouter = require('./component/moment/moment.route');
router.use("/user",authRouter);
router.use("/moment",momentRouter);

module.exports = router; 

