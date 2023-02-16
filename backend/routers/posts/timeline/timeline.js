const router = require("express").Router();

const { getTimelineAllPosts } = require("./allPosts");

router.get("/:id/timeline", getTimelineAllPosts);

module.exports = router;