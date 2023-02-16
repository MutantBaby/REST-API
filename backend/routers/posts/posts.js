const router = require("express").Router();

const routerReaction = require("./reaction/reaction");
const routerTimeline = require("./timeline/timeline");
const {
  getPosts_CRUD_PostGet,
  postPosts_CRUD_PostPost,
  putPosts_CRUD_PostUpdate,
  deletePosts_CRUD_PostDelete,
  getPosts_CRUD_GetAllPostsOfUser
} = require("./CRUD");

router.post("/", postPosts_CRUD_PostPost);
router.get("/:id", getPosts_CRUD_PostGet);
router.put("/:id", putPosts_CRUD_PostUpdate);
router.delete("/:id", deletePosts_CRUD_PostDelete);
router.get("/allposts/:id", getPosts_CRUD_GetAllPostsOfUser);

router.use(routerReaction);
router.use(routerTimeline);

module.exports = router;