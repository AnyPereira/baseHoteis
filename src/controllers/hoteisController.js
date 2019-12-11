const hoteis = require("../model/hoteis");


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
    hoteis.updateOne(
      {_id:req.params._id},
      {$set:req.body},
      {upsert:false},
    )
    .then(()=>{
        return res.status(200).send({message: 'Atualizado com sucesso'})
    })
      .catch((err)=> {
          return res.status(400).send({message:err})
      })
  }

  exports.excluirHotel = (req,res) => {
      const excluirId = req.params._id

      hoteis.findByIdAndRemove(excluirId)
      .then((hotel)=>{
          if(!hotel){
              return res.status(200).send({message:'Hotel não localizado!'})
          }
          
          return res.status(200).send({message: 'Hotel removido com sucesso!'})
      })
      .catch((err) =>{
          return res.status(400).send({message:err})
      })
  }
  
exports.get = (req,res) => {
    hoteis.find(function(err, hoteis){
        if(err) res.status(500).send(err);

        res.status(200).send(hoteis);
    })
}

exports.getCafeDaManha = async (req,res) => {
    const comCafe = await hoteis.find({ cafeManha:true })
    res.status(200).send(comCafe);
}

exports.getCidade = (req,res) =>{
    const cidade = req.params.nomeCidade

    const cidadeHotel = hoteis.find({cidade})
    .then((nomeCidade) =>{
        res.status(200).send(nomeCidade)
    })
    .catch((err)=>{
        
        res.status(400).send({ message: 'Cidade não localizada!' })
    })
}

