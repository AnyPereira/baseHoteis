const express = require("express")
const router = express.Router()
const controller = require("../controllers/hoteisController")

/**
 * @api {get} /hoteis
 * @apiGroup Hoteis
 * * 
 * @apiSuccess {Object[]} hoteis Base de Hoteis
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *      "nome": "Ibis Berrini",
        "cidade": "Sao Paulo",
        "estado": "SP",
        "pais": "Brasil",
        "tipoQuarto": "Double",
        "cafeManha": true,
        "valorDiaria": 150,
        "tipoFaturamento": "Direto",
        "dataReserva": [
            {
                "dataInicial": "2020-01-01T02:00:00.000Z",
                "dataFinal": "2020-12-01T02:00:00.000Z"
            }
        ]
     * }]
 * */
router.get("/", controller.get)
router.get("/cafeDaManha", controller.getCafeDaManha)
router.get("/:nomeCidade", controller.getCidade)
router.post("/", controller.post)
router.put("/:_id", controller.putById)
router.delete("/:_id", controller.excluirHotel)

module.exports = router