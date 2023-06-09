const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
    await transaccion.save();
    res.status(200).json({
    'status': '1',
    'msg': 'Transaccion guardada.'})
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando operacion.'})
    }
    }

transaccionCtrl.getTransacciones = async (req ,res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.getTransaccionCliente = async (req, res) => {
    const { email } = req.query;
    try {
      const transacciones = await Transaccion.find({ emailCliente: email });
      res.json(transacciones);
    } catch (error) {
      res.status(500).json({
        status: '0',
        msg: 'Error al recuperar el historico del cliente.'
      });
    }
  };
  
  transaccionCtrl.getTransaccionPorDivisa = async (req, res) => {
    const { monedaOrigen, monedaDestino } = req.query;
    try {
      const transacciones = await Transaccion.find({
        monedaOrigen,
        monedaDestino
      });
      res.json(transacciones);
    } catch (error) {
      res.status(500).json({
        status: '0',
        msg: 'Error al recuperar las transacciones por divisas.'
      });
    }
  };
  module.exports = transaccionCtrl
