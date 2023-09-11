const router = require('express').Router();
const {
  addOrderItems,
  getMyOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
} = require('../src/controllers/order.controller');
const { protect, admin } = require('../src/middleware/auth.middleware');

router
  .route('/')
  .post(protect, addOrderItems)
  .get(protect, admin, getAllOrders);

router.route('/myorder').get(protect, getMyOrder);
router.route('/:id').get(protect, admin, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

module.exports = router;
