//defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/producto-controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', productoCtrl.createProducto);
router.get('/', productoCtrl.getProductosDestacados);
router.get('/', productoCtrl.getProductos);
// router.delete('/:id', productoCtrl.deleteProducto);
router.put('/:id', productoCtrl.editProducto);
router.get('/:id', productoCtrl.getProducto);
//exportamos el modulo de rutas
module.exports = router;