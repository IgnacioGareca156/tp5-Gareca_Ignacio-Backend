const Espectador = require('../models/espectador');
const espectadorCtrl = {}

espectadorCtrl.createEspectador = async (req, res) => {
    try {
      const espectador = new Espectador(req.body);
      await espectador.save();
      res.status(200).json({
        status: '1',
        msg: 'Espectador guardado exitosamente.'
      });
    } catch (error) {
      res.status(400).json({
        status: '0',
        msg: 'Error al guardar el espectador.'
      });
    }
  };
  
  espectadorCtrl.getEspectadores = async (req, res) => {
    try {
      const espectadores = await Espectador.find();
      res.json(espectadores);
    } catch (error) {
      res.status(500).json({
        status: '0',
        msg: 'Error al obtener los espectadores.'
      });
    }
  };
  
  espectadorCtrl.getEspectador = async (req, res) => {
    try {
      const espectador = await Espectador.findById(req.params.id);
      res.json(espectador);
    } catch (error) {
      res.status(500).json({
        status: '0',
        msg: 'Error al obtener el espectador.'
      });
    }
  };
  
  module.exports = espectadorCtrl;