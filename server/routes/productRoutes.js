const express=require("express");

const router=
express.Router();

const Product=
require("../models/Product");

router.post(
"/add",
async(req,res)=>{

try{

console.log(
"Incoming Product:",
req.body
);

const product=
await Product.create({

name:req.body.name,

description:req.body.description,

price:req.body.price,

image:req.body.image,

stock:req.body.stock

});

res.status(201).json({

message:"Product Added",

product

});

}

catch(error){

console.log(
"PRODUCT ERROR:",
error
);

res.status(500).json({

message:error.message

});

}

});

router.get(
"/all",
async(req,res)=>{

try{

const products=
await Product.findAll();

res.json(
products
);

}
catch(error){

res.status(500).json({

message:error.message

});

}

});

module.exports=router;