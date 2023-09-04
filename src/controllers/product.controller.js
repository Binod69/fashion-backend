const Product = require('../models/product.model');
const asyncHandler = require('express-async-handler');

//@desc  Fetch all products
//@route Get api/v1/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc  Fetch products by id
//@route Get api/v1/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

module.exports = {
  getProducts,
  getProductById,
};
