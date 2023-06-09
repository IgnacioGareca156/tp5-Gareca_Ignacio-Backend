//defino controlador para el manejo de CRUD
const TransaccionCtrl = require('./../controllers/transaccion-controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', TransaccionCtrl.createTransaccion);
router.get('/', TransaccionCtrl.getTransacciones);
router.get('/cliente/:id', TransaccionCtrl.getTransaccionCliente);
router.get('/divisas/:id', TransaccionCtrl.getTransaccionPorDivisa)
//exportamos el modulo de rutas
module.exports = router