const Post = require("../../../models/Post");
const User = require("../../../models/User");

async function putReactionPostLike(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    const liker = req.body.userId;

    // if I like my post
    if (liker === post.userId) {
      try {
        if (!post.likes.includes(liker)) {
          await post.updateOne({ $push: { likes: liker } })

          return res.status(403).json("I have like my own post");

        } else return res.status(403).json("I have already like my own post");

      } catch (err) {
        res.status(500).json("Error occured while liking my own post")
      }

    } else { // if other user like my post
      try {
        const userExists = await User.findOne({ _id: liker });

        if (userExists == null) return res.status(403).json("You have to sign up to like this post");

        if (!post.likes.includes(liker)) {
          await post.updateOne({ $push: { likes: liker } })

          return res.status(403).json("You like this post");

        } else return res.status(403).json("you have already like this post");
      }
      catch (err) {
        res.status(500).json("Error occured when other user is liking my post")
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  putReactionPostLike,
}

