const Ticket = require('../models/ticket');
const ticketCtrl = {}


ticketCtrl.createTicket = async (req, res) => {
    try {
      const ticket = new Ticket(req.body);
      await ticket.save();
      res.status(200).json({
        status: '1',
        msg: 'Ticket creado exitosamente.'
      });
    } catch (error) {
      res.status(400).json({
        status: '0',
        msg: 'Error al crear el ticket.'
      });
    }
  };
  
  ticketCtrl.getTicket = async (req, res) => {
    try {
      const tickets = await Ticket.findById(req.params.id).populate('espectador');
      res.json(tickets);
    } catch (error) {
      res.status(500).json({
        status: '0',
        msg: 'Error al obtener ticket.'
      });
    }
  };

  // ticketCtrl.getTicket = async (req, res) => {
  //   const ticket = await Ticket.findById(req.params.id);
  //   res.json(ticket);
  // };

  ticketCtrl.getTicketsFiltro = async (req, res) => {
    try {
    
      let parametros = {}
  
      if (req.query.categoriaEspectador != '0' && req.query.categoriaEspectador != 'undefined') {
        parametros.categoriaEspectador = req.query.categoriaEspectador;
      }
      var tickets = await Ticket.find(parametros).populate("espectador");
      res.json(tickets);
    } catch (error) {
      res.status(500).json({
        status: '0',
        msg: 'Error al obtener los tickets.'
      });
    }
  };
  
  ticketCtrl.deleteTicket = async (req, res) => {
    try {
      await Ticket.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: '1',
        msg: 'Ticket eliminado exitosamente.'
      });
    } catch (error) {
      res.status(500).json({
        status: '0',
        msg: 'Error al eliminar el ticket.'
      });
    }
  };
  
  ticketCtrl.updateTicket = async (req, res) => {
    try {
      await Ticket.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        status: '1',
        msg: 'Ticket actualizado exitosamente.'
      });
    } catch (error) {
      res.status(500).json({
        status: '0',
        msg: 'Error al actualizar el ticket.'
      });
    }
  };
  
  module.exports = ticketCtrl;