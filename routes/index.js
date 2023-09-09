const router = require('express').Router();

const homeRoutes = require('./home.routes');
const productRoutes = require('./products.routes');
const userRoutes = require('./user.routes');

router.use('/', homeRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);

module.exports = router;
