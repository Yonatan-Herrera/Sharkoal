const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'hello world' });
});

router.get('/stock/:symbol', (req, res) => {
  res.send('work in progress');
});

module.exports = router;
