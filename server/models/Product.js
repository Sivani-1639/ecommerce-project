const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/db");

const Product = sequelize.define(
  "products",
  {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
    stock: DataTypes.INTEGER,
  },
  {
    tableName: "products",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Product;