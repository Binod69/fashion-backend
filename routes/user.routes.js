const router = require('express').Router();

const {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUsersByID,
  updateUser,
} = require('../src/controllers/user.controller');

const { protect, admin } = require('../src/middleware/auth.middleware');

router.route('/').get(protect, admin, getUsers);
router.route('/register').post(registerUser);
router.post('/logout', logoutUser);
router.post('/login', loginUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .get(protect, admin, getUsersByID)
  .delete(protect, admin, deleteUser)
  .put(protect, admin, updateUser);

module.exports = router;
