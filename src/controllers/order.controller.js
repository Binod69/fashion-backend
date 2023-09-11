const Order = require('../models/order.model');
const asyncHandler = require('express-async-handler');

//@desc  Create new order
//@route POST api/v1/orders
//@access Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send('add order items');
});

//@desc  Get logged in user orders
//@route GET api/v1/orders/myorders
//@access Private
const getMyOrder = asyncHandler(async (req, res) => {
  res.send('get my order ');
});

//@desc  Get order by id
//@route GET api/v1/orders/:id
//@access Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send('get order by id');
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
