const User = require("../../models/User");

async function putMainSlashUserFollow(req, res) {
  if (req.params.id !== req.body.userId) {

    try {
      const user = await User.findById(req.body.userId);
      const currentUser = await User.findById(req.params.id);

      if (!currentUser.followings.includes(user.followers)) {

        await currentUser.updateOne({ $push: { followings: user.id } })
        await user.updateOne({ $push: { followers: currentUser.id } })

        return res.status(200).json("User is followed Successfully");
      } else return res.status(403).json("Already followed");
    } catch (err) {
      res.status(500).json(err);
    }
  } else return res.status(403).json("Can't follow yourself");
}

module.exports = {
  putMainSlashUserFollow
}