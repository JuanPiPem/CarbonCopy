const express = require("express");
const router = express.Router();
const { generateToken, validateToken } = require("../config/tokens.config");
const { validateAuth } = require("../middlewares/auth");
const { transporter } = require("../config/mailer.config");
const User = require("../db/models/Users.models");

router.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((error) => {
      res.status(404).send({ error: "Could not get the users." });
    });
});

router.post("/register", (req, res) => {
  const { fullname, email, password } = req.body;
  User.create({ fullname: fullname, email, password })

    .then((newUser) => {
      res.status(201).send(newUser);
    })

    .catch((error) => {
      res.status(404).send({ error: "Could not find the user." });
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Login request received:", email);
  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        email: user.email,
        fullname: user.fullname,
        id: user.id,
      };
      console.log(payload);
      const token = generateToken(payload);
      console.log("Token generated:", token);

      res.cookie("token", token, {
        sameSite: "none",
        httpOnly: true,
        secure: true,
      });

      res.send(payload);
    });
  });
});

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
