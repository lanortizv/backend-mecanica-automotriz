'use strict'
const { pool } = require('./config')
function getClients(request, response) {
    pool.query('SELECT * FROM schema.cliente;', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
function addClient(request, response) {
    const { nombre, tipo, tel, direccion } = request.body
    console.log(request.body)
    pool.query('INSERT INTO schema.cliente (nombre, tipo,tel,direccion) VALUES ($1, $2,$3,$4)', [nombre, tipo, tel, direccion], error => {
        if (error) {
            throw error
        }
        response.status(201).json({ status: 'success', message: 'Cliente added.' })
    })
}
module.exports = {
    getClients,
    addClient
}