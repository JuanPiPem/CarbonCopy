const { DataTypes, Model } = require("sequelize");
const db = require("../index");

class FavoritesStyle extends Model {}

FavoritesStyle.init(
  {
    styleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "FavoritesStyle" }
);

module.exports = FavoritesStyle;
