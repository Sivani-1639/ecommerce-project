const Order = require("../models/Order");

const placeOrder = async(req,res)=>{

try{

const {
userId,
products,
totalPrice
}=req.body;

const order=
await Order.create({

userId,
products,
totalPrice

});

res.status(201).json({

message:"Order Placed Successfully",

order

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};



const getOrders=async(req,res)=>{

try{

const orders=
await Order.findAll();

res.json(
orders
);

}

catch(error){

res.status(500).json({

message:error.message

});

}

};

module.exports={

placeOrder,
getOrders

};