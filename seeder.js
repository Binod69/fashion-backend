const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const products = require('./data/productsData');
const User = require('./src/models/user.model');
const Product = require('./src/models/product.model');
const Order = require('./src/models/order.model');
const connectDB = require('./config/db.config');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log('data imported!');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();
    console.log('Data destroyed');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
