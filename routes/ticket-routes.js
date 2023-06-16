const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/ticket-controller');

router.post('/', ticketCtrl.createTicket);
//router.get('/', ticketCtrl.getTickets);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.updateTicket);
router.get('/',ticketCtrl.getTicketsFiltro);
router.get('/:id',ticketCtrl.getTicket)


module.exports = router;