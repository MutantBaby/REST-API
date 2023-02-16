const router = require("express").Router();

const routerMain = require("./main/main");
const routerUser = require("./users/users");
const routerPosts = require("./posts/posts");
const routerSubscribe = require("./subscribe/subscribe");

router.use("/users/auth", routerUser);
router.use("/subs", routerSubscribe);
router.use("/posts", routerPosts);
router.use("/", routerMain);

module.exports = router;