const mongoose = require('mongoose');
const espectador = require('./espectador');
const {Schema} = mongoose;

const TicketSchema = new Schema({
    precioTicket: {type: Number, required: true},
    fechaCompra: {type:String, required: true},
    espectador: {type: Schema.Types.ObjectId, ref: espectador, required: true},
    categoriaEspectador: {type: String, enum: ['e', 'l'],required: true }, // e = Extranjero, l = Local

})
module.exports = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);