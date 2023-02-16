const Post = require("../../../models/Post");
const User = require("../../../models/User");

async function getTimelineAllPosts(req, res) {
  try {
    const currentUser = await User.findById(req.params.id);
    const userPosts = await Post.find({ userId: currentUser._id });

    const friendPosts = await Promise.all(
      currentUser.followings.map(friendId => {
        Post.find({ userId: friendId });
      })
    )

    res.json(userPosts.concat(...friendPosts));
  }
  catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  getTimelineAllPosts,
}
