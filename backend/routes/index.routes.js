const express = require("express");
const router = express.Router();

const userRoutes = require("./users.routes");
// const favoritesRoutes = require("./favorites");

router.use("/users", userRoutes);
// router.use("/favorites", favoritesRoutes);

module.exports = router;
