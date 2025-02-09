const express = require('express');
const app = express();
const port = 8000;

const routers = require('./routers');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routers);

app.listen(port, () => {
  console.log(`express server up with ${port}`);
});
