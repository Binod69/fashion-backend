const Order = require('../models/order.model');
const asyncHandler = require('express-async-handler');

//@desc  Create new order
//@route POST api/v1/orders
//@access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createOrder = await order.save();

    res.status(201).json(createOrder);
  }
});

//@desc  Get logged in user orders
//@route GET api/v1/orders/myorders
//@access Private
const getMyOrder = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

//@desc  Get order by id
//@route GET api/v1/orders/:id
//@access Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name,email'
  );
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

//@desc Update orders to paid
//@route GET api/v1/orders/:id/pay
//@access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('update order to paid');
});

//@desc Update orders to delivered
//@route GET api/v1/orders/:id/deliver
//@access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send('update order to delivered');
});

//@desc Get all orders
//@route GET api/v1/orders
//@access Private/Admin
const getAllOrders = asyncHandler(async (req, res) => {
  res.send('get all orders');
});

module.exports = {
  addOrderItems,
  getMyOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
};
