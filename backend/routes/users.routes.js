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
      const confirmationLink = `http://localhost:3001/confirm/${newUser.id}`;
      return sendConfirmationEmail(email, confirmationLink);
    })
    .then(() => {
      res.status(201).send(newUser);
    })

    .catch((error) => {
      res.status(404).send({ error: "Could not find the user." });
    });
});

function sendConfirmationEmail(email, confirmationLink) {
  return transporter
    .sendMail({
      from: process.env.EMAIL_NODEMAILER,
      to: email,
      subject: "Confirmación de registro",
      html: `<p>Haz clic en el siguiente enlace para confirmar tu registro: <a href="${confirmationLink}">${confirmationLink}</a></p>`,
    })
    .then(() => {
      console.log("Confirmation email sent successfully.");
    })
    .catch((error) => {
      console.error("Error sending confirmation email:", error);
      throw new Error("Could not send confirmation email.");
    });
}

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

router.get("/confirm/:userId", (req, res) => {
  const userId = req.params.userId;

  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ error: "User not found." });
      }

      return user.update({ confirmed: true });
    })
    .then(() => {
      res.send("Registro confirmado correctamente.");
    })
    .catch((error) => {
      console.error("Error during confirmation:", error);
      res.status(500).send({ error: "Could not confirm registration." });
    });
});

module.exports = router;
