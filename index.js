const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')
const methods=require('./methods')
const app = express()
require("@babel/register")({
    presets: ["@babel/preset-env"]
  });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


app
  .route('/clientes')
  // GET endpoint
  .get(methods.getClients)
  // POST endpoint
  .post(methods.addClient)

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})