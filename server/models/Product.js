const { DataTypes } = require("sequelize");

const { sequelize } =
require("../config/db");

const Product =
sequelize.define(

"Product",

{

name:{
type:DataTypes.STRING,
allowNull:false
},

description:{
type:DataTypes.TEXT,
allowNull:true
},

price:{
type:DataTypes.FLOAT,
allowNull:false
},

image:{
type:DataTypes.STRING,
allowNull:true,
defaultValue:""
},

stock:{
type:DataTypes.INTEGER,
allowNull:true,
defaultValue:0
}

}

);

module.exports=Product;