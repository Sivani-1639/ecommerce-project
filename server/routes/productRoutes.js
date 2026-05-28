const express = require("express");

const router = express.Router();

const Product = require("../models/Product");

router.get("/", async (req, res) => {

  try {

    const products = await Product.findAll();

    res.json(products);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

});

module.exports = router;