const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('API is Running');
});

module.exports = router;