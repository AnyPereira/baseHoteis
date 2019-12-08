const mongoose = require("mongoose");

const hoteisSchema = new mongoose.Schema(
    {
        nome:{type:String},
        cidade:{type:String},
        estado:{type:String},
        pais:{type:String},
        tipoQuarto:{type:String},
        valorDiaria:{type:Number},
        dataReserva:[{
            dataInicial:{type:Date},
            dataFinal:{type:Date}
        }]
    },
    {versionkey:false})

const hoteis = mongoose.model('hoteis', hoteisSchema);

module.exports = hoteis;