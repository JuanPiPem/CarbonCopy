const { DataTypes, Model } = require("sequelize");
const db = require("../index");

class User extends Model {}

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
  },
  { sequelize: db, modelName: "user" }
);

module.exports = User;
