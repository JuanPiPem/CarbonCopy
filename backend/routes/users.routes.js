const express = require("express");
const router = express.Router();
const User = require("../db/models/Users.models");

router.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((error) => {
      res.status(404).send({ error: "No se pudieron obtener los usuarios." });
    });
});

router.post("/register", (req, res) => {
  User.create(req.body)

    .then((newUser) => {
      res.status(201).send(newUser);
    })

    .catch((error) => {
      res.status(404).send({ error: "Noss se pudo agregar el usuario." });
    });
});

module.exports = router;
