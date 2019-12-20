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
app
  .route('/autos')
  // GET endpoint
  .get(controller.getAutos)
  // POST endpoint
  .post(controller.addAuto)
app
  .route('/cat_trabajo')
  // GET endpoint
  .get(controller.getCat_trabajos)
  // POST endpoint
  .post(controller.addCat_trabajo)
app
  .route('/trabajo')
  // GET endpoint
  .get(controller.getTrabajos)
  // POST endpoint
  .post(controller.addTrabajo)

app
  .route('/cliente/:id')
  // GET endpoint
  .get(controller.getClienteById)

app.route('/autoByPlaca/:placa')
  .get(controller.getAutoByPlaca)
app.route('/presupuestoByAuto/:id')
  .get(controller.getPresupuestoByAuto)
app.route('/trabajoByPresu/:id')
  .get(controller.getTrabajoByPresupuesto)
app.route('/trabajoByOrden/:id')
  .get(controller.getTrabajoByOrden)

// Start server
const port = process.env.PORT || 3002
app.listen(port, () => {
  console.log(`Server listening at ` + port)
})