const router = require("express").Router();

const { putReactionPostLike } = require("./like");
const { putReactionPostUnlike } = require("./unlike");

router.put("/:id/like", putReactionPostLike);
router.put("/:id/unlike", putReactionPostUnlike);

module.exports = router;