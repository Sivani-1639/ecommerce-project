const {DataTypes}=require("sequelize");

const {sequelize}=require("../config/db");

const Product=sequelize.define("Product",{

name:DataTypes.STRING,

description:DataTypes.TEXT,

price:DataTypes.INTEGER,

image:DataTypes.STRING,

stock:DataTypes.INTEGER

})

module.exports=Product