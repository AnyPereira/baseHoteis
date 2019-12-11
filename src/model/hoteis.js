const mongoose = require("mongoose");

const hoteisSchema = new mongoose.Schema(
    {
        nome:{type:String},
        cidade:{type:String},
        estado:{type:String},
        pais:{type:String},
        tipoQuarto:{type:String},
        cafeManha:{type:Boolean},
        valorDiaria:{type:Number},
        tipoFaturamento:{type:String},
        dataReserva:[{
            _id: {type:false},
            dataInicial:{type:Date},
            dataFinal:{type:Date}
        }]
    },
        {versionKey:false})

const hoteis = mongoose.model('hoteis', hoteisSchema);

module.exports = hoteis;