const router = require("express").Router();

const { putMainSlashUserFollow } = require("./follow");
const { putMainSlashUserUnFollow } = require("./unfollow");

router.put("/:id/follow", putMainSlashUserFollow);
router.put("/:id/unfollow", putMainSlashUserUnFollow);

module.exports = router;