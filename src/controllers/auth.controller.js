const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');

const registerUser = asyncHandler(async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
});

module.exports = {
  registerUser,
};
