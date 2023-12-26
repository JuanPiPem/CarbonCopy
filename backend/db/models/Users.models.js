const { DataTypes, Model } = require("sequelize");
const db = require("../index");
const bcrypt = require("bcrypt");
const FavoritesStyle = require("./FavoritesStyle.model");

class User extends Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (newHash) => newHash === this.password
    );
  }

  static associate(models) {
    User.hasMany(models.FavoritesStyle, { foreignKey: "userId" });
  }
}

User.init(
  {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    confirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeSave((user) => {
  const salt = bcrypt.genSaltSync();

  user.salt = salt;

  return user
    .hash(user.password, salt)
    .then((hash) => {
      user.password = hash;
    })
    .catch((err) => {
      console.error("Error hashing password:", err);
    });
});

module.exports = User;
