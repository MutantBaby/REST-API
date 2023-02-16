const bcrypt = require("bcrypt");
// const emailValidator = require('deep-email-validator');

const User = require("../../models/User");

// async function isEmailValid(email) {
//   return emailValidator.validate(email);
// }

async function postUserAuthRegistration(req, res) {

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send({
      message: "Email or password missing."
    })
  }

  // const { valid, reason, validators } = await isEmailValid(email);

  // if (valid) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await new User({
      email: email,
      username: username,
      password: hashedPassword,
    })

    const user = await newUser.save();

    console.log("New User data added ", user);
    res.status(200);

  } catch (err) {
    // console.error("Error: ", err, "\nReason: ", validators[reason].reason);
    res.status(500).json(err);
  }

  // res.redirect("/users/auth");
  // } else {
  // return res.status(400).send({
  //   message: "Invalid email."
  // })
  // }
};

async function postUserAuthLogin(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: "Email or password missing."
    })
  }

  // const { valid, reason, validators } = await isEmailValid(email);

  // if (valid) {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("User not found");

    validPassword = await bcrypt.compare(req.body.password, user.password);
    !validPassword && res.status(400).json("Wrong Password");

    res.status(200).json(user);

  } catch (err) {
    // console.error("Error: ", err, "\nReason: ", validators[reason].reason);
    res.status(500).json(err);
  }

  // } else {
  //   return res.status(400).send({
  //     message: "Invalid email"
  //   })
  // }
}

module.exports = {
  postUserAuthRegistration,
  postUserAuthLogin
};