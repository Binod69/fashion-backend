const Product = require('../models/product.model');
const asyncHandler = require('express-async-handler');
const redis = require('redis');
const redisUrl = 'redis://127.0.0.1:6379';
const util = require('util');

//@desc  Fetch all products
//@route Get api/v1/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
// const getProducts = asyncHandler(async (req, res) => {
//   try {
//     // Initialize a new Redis client for this request
//     const client = redis.createClient(redisUrl);
//     client.get = util.promisify(client.get);

//     // Assuming you have a unique key for caching, like 'products'
//     const cacheKey = 'products';

//     // Check if there's cached data in Redis related to this query
//     const cachedProduct = await client.get(cacheKey);

//     // If cached data exists, respond to the request with the cached data
//     if (cachedProduct) {
//       console.log('Serving from cache');
//       res.json(JSON.parse(cachedProduct)); // Parse cached data from JSON
//     } else {
//       // If no cached data is found, fetch data from MongoDB
//       console.log('Serving from MongoDB');
//       const products = await Product.find({});

//       // Store the fetched data in Redis for future requests
//       await client.set(cacheKey, JSON.stringify(products));

//       // Respond to the request with the fetched data
//       res.json(products);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   } finally {
//     // Always quit the Redis client when done
//     if (client) {
//       client.quit();
//     }
//   }
// });

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
