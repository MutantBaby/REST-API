const bcrypt = require("bcrypt");

const User = require("../../models/User");

async function getMain_CRUD_User(req, res) {
  if (req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      return res.status(500).json(err);
    }

  } else return res.status(403).json("\nYou can get info of your account only\n");
};

async function putMain_CRUD_UserUpdate(req, res) {
  if (req.body.userId === req.params.id) {

    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }

      try {
        await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });

        res.status(200).json("Account has been updated");
      } catch (err) {
        return res.status(500).json(err);
      }
    }
  } else return res.status(403).json("\nYou can update your account only\n");
}

async function putMain_CRUD_UserDelete(req, res) {
  if (req.body.userId === req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);

      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }

  } else return res.status(403).json("\nYou can delete your account only\n");
}

module.exports = {
  getMain_CRUD_User,
  putMain_CRUD_UserUpdate,
  putMain_CRUD_UserDelete,
}