const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const controller = require('./controller')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app
  .route('/clientes')
  // GET endpoint
  .get(controller.getClients)
  // POST endpoint
  .post(controller.addClient)

// Start server
const port = process.env.PORT || 3002
app.listen(port, () => {
  console.log(`Server listening at `+port)
})