const hoteis = require("../model/hoteis");

const fs = require("fs");

exports.post = (req,res) =>{
    let hotel = new hoteis(req.body);

    hotel.save(function(err){
        if (err) res.status(500).send(err);

        res.status(200).send({
            status: true,
            mensagem:"Hotel incluído com sucesso!"
        });
    })
}

exports.putById = (req,res) => {
    hoteis.update(
      {_id:req.params.putByiId},
      {$set:req.body},
      {upsert:true},
      function(err){
        if(err) return res.status(500).send({message:err})
        res.status(200).send({message:"Atualizado"})
      })
  }
exports.get = (req,res) => {
    hoteis.find(function(err, hoteis){
        if(err) res.status(500).send(err);

        res.status(200).send(hoteis);
    })
}

