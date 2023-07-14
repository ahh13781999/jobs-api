const { Router } = require('express');
const { register, login } = require('../controllers/auth');
const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;