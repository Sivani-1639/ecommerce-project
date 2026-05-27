const express=
require("express");

const router=
express.Router();

const Order=
require("../models/Order");

router.post(
"/create",
async(req,res)=>{

try{

const order=
await Order.create(

req.body

);

res.json({

message:
"Order created",

order

});

}

catch(error){

res.status(500).json(error);

}

});

module.exports=
router;