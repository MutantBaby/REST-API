const Post = require("../../../models/Post");
const User = require("../../../models/User");

async function putReactionPostUnlike(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    const unLiker = req.body.userId;

    // if I like my post
    if (unLiker === post.userId) {
      try {
        if (!post.likes.includes(unLiker)) {
          await post.updateOne({ $pull: { likes: unLiker } })

          return res.status(403).json("I have unlike my own post");

        } else return res.status(403).json("I have already unlike my own post");

      } catch (err) {
        res.status(500).json("Error occured while unliking my own post")
      }

    } else { // if other user like my post
      try {
        const userExists = await User.findOne({ _id: unLiker });

        if (userExists == null) return res.status(403).json("You have to sign up to unlike this post");

        if (!post.likes.includes(unLiker)) {
          await post.updateOne({ $pull: { likes: unLiker } })

          return res.status(403).json("You unlike this post");

        } else return res.status(403).json("you have already unlike this post");
      }
      catch (err) {
        res.status(500).json("Error occured when other user is unliking my post")
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  putReactionPostUnlike,
}

