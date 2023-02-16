const Post = require("../../models/Post");

async function postPosts_CRUD_PostPost(req, res) {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);

  } catch (err) {
    res.status(500).json(err);
  }
}

async function putPosts_CRUD_PostUpdate(req, res) {
  try {
    const post = await Post.findById(req.params.id);

    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });

      res.status(200).json("Post Updated");
    } else res.status(403).json("You can Update on your post only");

  } catch (err) {
    res.status(500).json(err);
  }
}

async function deletePosts_CRUD_PostDelete(req, res) {
  try {
    const post = await Post.findById(req.params.id);

    if (post.userId === req.body.userId) {
      await Post.findByIdAndDelete(req.params.id);

      res.status(200).json("Post Deleted");
    } else res.status(403).json("You can Delete your post only");

  } catch (err) {
    res.status(500).json(err);
  }
}

async function getPosts_CRUD_PostGet(req, res) {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getPosts_CRUD_GetAllPostsOfUser(req, res) {
  try {
    const allPosts = await Post.find({ userId: req.params.id });

    console.log("All posts", allPosts)
    console.log("All posts type", typeof (allPosts));

    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  getPosts_CRUD_PostGet,
  postPosts_CRUD_PostPost,
  putPosts_CRUD_PostUpdate,
  deletePosts_CRUD_PostDelete,
  getPosts_CRUD_GetAllPostsOfUser
}
