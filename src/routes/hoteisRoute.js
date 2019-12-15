const express = require("express")
const router = express.Router()
const controller = require("../controllers/hoteisController")

/**
 * @api {get} /hoteis
 * @apiName baseHoteis
 * @apiGroup Hoteis
 * * 
 * @apiSuccess {Object[]} Retorna todos os hoteis cadastrados
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
/**
 * @api {get} /cafeDaManha
 * @apiName baseHoteis
 * @apiGroup Hoteis
 * * 
 * @apiSuccess {Object[]} Retorna apenas hoteis que possuem café da manhã
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
router.get("/cafeDaManha", controller.getCafeDaManha)

/**
 * @api {get} /:nomeCidade
 * @apiName baseHoteis
 * @apiGroup Hoteis
 * * 
 * @apiSuccess {Object[]} Retorna apenas os hoteis a cidade informada
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

router.get("/:nomeCidade", controller.getCidade)

/**
 * @api {post} /hoteis
 * @apiName baseHoteis
 * @apiGroup Hoteis
 * * 
 * @apiSuccess {Object[]} Inseri hoteis na base
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
    "status": true,
    "mensagem": "Hotel incluído com sucesso!"
*    }]
 * */

router.post("/", controller.post)

/**
 * @api {put} /:_id
 * @apiName baseHoteis
 * @apiGroup Hoteis
 * * 
 * @apiSuccess {Object[]} Atualiza os dados do hotel
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
    "message": "Dado(s) atualizado(s) com sucesso!"
*    }]
 * */

router.put("/:_id", controller.putById)

/**
 * @api {delete} /:_id
 * @apiName baseHoteis
 * @apiGroup Hoteis
 * * 
 * @apiSuccess {Object[]} Exclui o hotel informado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
    "message": "Hotel removido com sucesso!"
*    }]
 * */

router.delete("/:_id", controller.excluirHotel)

module.exports = router