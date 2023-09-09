const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');

//@desc  Auth user & get token
//@route POST api/v1/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

//@desc  Register User
//@route POST api/v1/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

//@desc  Logout User / clear cookie
//@route POST api/v1/users
//@access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('user logout');
});

//@desc  Get user profile
//@route GET api/v1/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('user profile');
});

//@desc  Update user profile
//@route PUT api/v1/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('user profile updated');
});

//@desc  Get users
//@route GET api/v1/users
//@access Private / Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('user profile by admin');
});

//@desc  Get users by id
//@route GET api/v1/users/:id
//@access Private / Admin
const getUsersByID = asyncHandler(async (req, res) => {
  res.send('user by id');
});

//@desc  delete
//@route Delete api/v1/users
//@access Private
const deleteUser = asyncHandler(async (req, res) => {
  res.send('user deleted');
});

//@desc  update user
//@route PUT api/v1/users
//@access Private / ADMIN
const updateUser = asyncHandler(async (req, res) => {
  res.send('user updated');
});

module.exports = {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUsersByID,
  updateUser,
};
