const express = require("express");
const router = express.Router();
const favoritesRoutes = require("./favorites.routes");
const userRoutes = require("./users.routes");

router.use("/users", userRoutes);
router.use("/favorites", favoritesRoutes);

module.exports = router;
