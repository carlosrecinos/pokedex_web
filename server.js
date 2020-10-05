const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./app');
const app = express();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Running on port: ${process.env.PORT || 5000}`);
})
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
  console.log('Body: ', JSON.stringify(req.body))
  next()
})

app.use((req, res, next) => {
  console.log('QueryStrings: ', JSON.stringify(req.query))
  next()
})
app.use('/api/', routes);

app.use('/images', express.static('files'))

app.use(express.static('public'))
