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

  const payload = {
    fullname,
    email,
  };

  const token = generateToken(payload, "1d");

  User.create({ fullname: fullname, email, password, token: token }).then(
    (newUser) => {
      const confirmURL = `http://localhost:3000/confirm-email/${token}`;
      const info = transporter.sendMail({
        from: '"Email confirmation" <carboncopyproject.mailing@gmail.com>',
        to: newUser.email,
        subject: "Email confirmation ✔",
        html: `<b>Please click on the following link, or copy the link and paste it into your browser to confirm your email:</b><a href="${confirmURL}">${confirmURL}</a>`,
      });
      info
        .then(() => {
          res.status(201).send(payload);
        })
        .catch((error) => {
          res.status(404).send({ error: "Could not find the user." });
        });
    }
  );
});

router.put("/confirm-email/:token", (req, res) => {
  const { token } = req.params;
  if (!token) res.sendStatus(400);

  User.update(
    {
      confirmed: true,
      token: null,
    },
    { where: { token }, returning: true }
  )
    .then((user) => {
      if (!user || user.length === 0) return res.sendStatus(401);
      res.status(200).send(`Usuario ${user[1][0].id} confirmado`);
    })
    .catch((err) => {
      res.status(500).send("Error confirming user!");
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Login request received:", email);
  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      if (!user.confirmed) return res.status(412).send("Not confirmed!");

      const payload = {
        email: user.email,
        fullname: user.fullname,
        id: user.id,
      };
      console.log(payload);
      const token = generateToken(payload, "10d");
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
