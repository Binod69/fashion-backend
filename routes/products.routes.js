const router = require('express').Router();
const {
  getProducts,
  getProductById,
} = require('../src/controllers/product.controller');
const checkObjectId = require('../src/middleware/checkObjectId.middleware');

router.route('/').get(getProducts);

router.route('/:id').get(getProductById);

module.exports = router;
