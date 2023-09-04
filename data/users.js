const bcrypt = require('bcryptjs');

const user = [
  {
    name: 'Amin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('admin12345', 10),
    isAdmin: true,
  },
  {
    name: 'User 1',
    email: 'user1@email.com',
    password: bcrypt.hashSync('user12345', 10),
    isAdmin: false,
  },
  {
    name: 'User 2',
    email: 'user2@email.com',
    password: bcrypt.hashSync('user12345', 10),
    isAdmin: false,
  },
];

module.exports = user;
