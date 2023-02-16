const User = require("../../models/User");

async function putMainSlashUserUnFollow(req, res) {
  if (req.params.id !== req.body.userId) {

    try {
      const user = await User.findById(req.body.userId);
      const currentUser = await User.findById(req.params.id);

      if (!currentUser.followings.includes(user.followers)) {
        // user.followers.push(currentUser.followers); // for adding
        await currentUser.updateOne({ $pull: { followings: user.id } })
        await user.updateOne({ $pull: { followers: currentUser.id } })

        return res.status(200).json("User is unfollowed Successfully");
      } else return res.status(403).json("Already unfollowed");
    } catch (err) {
      res.status(500).json(err);
    }
  } else return res.status(403).json("Can't unfollow yourself");
}

module.exports = {
  putMainSlashUserUnFollow
}