const router = require("express").Router();

const { getMain_CRUD_User, putMain_CRUD_UserUpdate, putMain_CRUD_UserDelete } = require("./CRUD");

router.get("/:id", getMain_CRUD_User);
router.put("/:id", putMain_CRUD_UserUpdate);
router.delete("/:id", putMain_CRUD_UserDelete);

module.exports = router;