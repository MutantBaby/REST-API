const router = require("express").Router();

const { postUserAuthRegistration, postUserAuthLogin } = require("./auth")

router.post("/login", postUserAuthLogin);
router.post("/|/registration", postUserAuthRegistration);

module.exports = router;