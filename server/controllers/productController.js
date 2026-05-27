const Product = require("../models/Product");

const addProduct = async (req,res)=>{

try{

const {
name,
description,
price,
image,
stock
}=req.body;

const product =
await Product.create({

name,
description,
price,
image,
stock

});

res.status(201).json({
message:"Product Added",
product
});

}

catch(error){

res.status(500).json({
message:error.message
});

}

};



const getProducts = async(req,res)=>{

try{

const products=
await Product.findAll();

res.json(products);

}

catch(error){

res.status(500).json({
message:error.message
});

}

};


module.exports={
addProduct,
getProducts
};