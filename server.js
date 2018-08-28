const express = require('express');

const app = express();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Running on port: ${process.env.PORT || 5000}`);
})

app.use('/images', express.static('public'))