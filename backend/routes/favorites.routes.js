const express = require("express");
const router = express.Router();
const { validateAuth } = require("../middlewares/auth");
const FavoritesStyle = require("../db/models/FavoritesStyle.model");
const { error } = require("console");

router.get("/favorites", validateAuth, (req, res) => {
  const userId = req.user.id;

  FavoritesStyle.findAll({ where: { userId } })
    .then((favorites) => {
      res.status(200).send(favorites);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ error: "Internal server error" });
    });
});

router.post("/favorites", validateAuth, (req, res) => {
  const { styleName } = req.body;
  const userId = req.user.id;

  FavoritesStyle.create({ styleName, userId })
    .then((newFavorite) => {
      res.status(201).send(newFavorite);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ error: "Internal server error" });
    });
});

module.exports = router;
