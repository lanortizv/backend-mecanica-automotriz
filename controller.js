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
function getAutos(request, response) {
    pool.query('SELECT * FROM schema.auto;', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
function addAuto(request, response) {
    const { placa, model, anio, cliente } = request.body
    console.log(request.body)
    pool.query('INSERT INTO schema.cliente (placa,model,anio,cliente) VALUES ($1, $2,$3,$4)', [placa, model, anio, cliente], error => {
        if (error) {
            throw error
        }
        response.status(201).json({ status: 'success', message: 'Auto added.' })
    })
}
function getCat_trabajos(request, response) {
    pool.query('SELECT * FROM schema.cat_trabajo;', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
function addCat_trabajo(request, response) {
    const { categoria } = request.body
    console.log(request.body)
    pool.query('INSERT INTO schema.cat_trabajo (categoria) VALUES ($1)', [categoria], error => {
        if (error) {
            throw error
        }
        response.status(201).json({ status: 'success', message: 'categoria added.' })
    })
}
function getTrabajos(request, response) {
    pool.query('SELECT * FROM schema.trabajo;', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
function addTrabajo(request, response) {
    const { nombre, precio_sug, cat_trabajo } = request.body
    console.log(request.body)
    pool.query('INSERT INTO schema.trabajo (nombre,precio_sug,cat_trabajo) VALUES ($1,$2,$3,$4)', [nombre, precio_sug, cat_trabajo], error => {
        if (error) {
            throw error
        }
        response.status(201).json({ status: 'success', message: 'trabajo added.' })
    })
}
function getClienteById(request, response) {
    pool.query('select * from schema.cliente where id=$1', [request.params.id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

function getAutoByPlaca(request, response) {
    pool.query('select * from schema.auto where placa=$1', [request.params.placa], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
function getPresupuestoByAuto(request, response) {
    pool.query('SELECT * FROM schema.presupuesto inner join schema.auto_presupuesto on schema.presupuesto.id=schema.auto_presupuesto.presupuesto where schema.auto_presupuesto.auto=$1', [request.params.id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
function getPresupuestoByAuto(request, response) {
    pool.query('SELECT * FROM schema.orden_trabajo inner join schema.auto_orden_trabajo on schema.orden_trabajo.id=schema.auto_orden_trabajo.orden_trabajo where schema.auto_orden_trabajo.auto=$1', [request.params.id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
module.exports = {
    getClients,
    addClient,
    getAutos,
    addAuto,
    getCat_trabajos,
    addCat_trabajo,
    getTrabajos,
    addTrabajo,
    getClienteById,
    getAutoByPlaca,
    getPresupuestoByAuto,
    getOrdenByAuto
}