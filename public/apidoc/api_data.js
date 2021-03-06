define({ "api": [
  {
    "type": "get",
    "url": "/hoteis",
    "title": "",
    "name": "baseHoteis",
    "group": "Hoteis__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>todos os hoteis cadastrados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 200 OK\n  [{\n     \"nome\": \"Ibis Berrini\",\n        \"cidade\": \"Sao Paulo\",\n        \"estado\": \"SP\",\n        \"pais\": \"Brasil\",\n        \"tipoQuarto\": \"Double\",\n        \"cafeManha\": true,\n        \"valorDiaria\": 150,\n        \"tipoFaturamento\": \"Direto\",\n        \"dataReserva\": [\n            {\n                \"dataInicial\": \"2020-01-01T02:00:00.000Z\",\n                \"dataFinal\": \"2020-12-01T02:00:00.000Z\"\n            }\n        ]\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hoteisRoute.js",
    "groupTitle": "Hoteis__"
  },
  {
    "type": "get",
    "url": "/cafeDaManha",
    "title": "",
    "name": "baseHoteis",
    "group": "Hoteis__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>apenas hoteis que possuem café da manhã</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 200 OK\n  [{\n     \"nome\": \"Ibis Berrini\",\n        \"cidade\": \"Sao Paulo\",\n        \"estado\": \"SP\",\n        \"pais\": \"Brasil\",\n        \"tipoQuarto\": \"Double\",\n        \"cafeManha\": true,\n        \"valorDiaria\": 150,\n        \"tipoFaturamento\": \"Direto\",\n        \"dataReserva\": [\n            {\n                \"dataInicial\": \"2020-01-01T02:00:00.000Z\",\n                \"dataFinal\": \"2020-12-01T02:00:00.000Z\"\n            }\n        ]\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hoteisRoute.js",
    "groupTitle": "Hoteis__"
  },
  {
    "type": "get",
    "url": "/:nomeCidade",
    "title": "",
    "name": "baseHoteis",
    "group": "Hoteis__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>apenas os hoteis a cidade informada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "   HTTP/1.1 200 OK\n  [{\n     \"nome\": \"Ibis Berrini\",\n        \"cidade\": \"Sao Paulo\",\n        \"estado\": \"SP\",\n        \"pais\": \"Brasil\",\n        \"tipoQuarto\": \"Double\",\n        \"cafeManha\": true,\n        \"valorDiaria\": 150,\n        \"tipoFaturamento\": \"Direto\",\n        \"dataReserva\": [\n            {\n                \"dataInicial\": \"2020-01-01T02:00:00.000Z\",\n                \"dataFinal\": \"2020-12-01T02:00:00.000Z\"\n            }\n        ]\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hoteisRoute.js",
    "groupTitle": "Hoteis__"
  },
  {
    "type": "post",
    "url": "/hoteis",
    "title": "",
    "name": "baseHoteis",
    "group": "Hoteis__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Inseri",
            "description": "<p>hoteis na base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n[{\n  \"status\": true,\n  \"mensagem\": \"Hotel incluído com sucesso!\"\n }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hoteisRoute.js",
    "groupTitle": "Hoteis__"
  },
  {
    "type": "put",
    "url": "/:_id",
    "title": "",
    "name": "baseHoteis",
    "group": "Hoteis__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Atualiza",
            "description": "<p>os dados do hotel</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n[{\n  \"message\": \"Dado(s) atualizado(s) com sucesso!\"\n }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hoteisRoute.js",
    "groupTitle": "Hoteis__"
  },
  {
    "type": "delete",
    "url": "/:_id",
    "title": "",
    "name": "baseHoteis",
    "group": "Hoteis__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Exclui",
            "description": "<p>o hotel informado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n[{\n  \"message\": \"Hotel removido com sucesso!\"\n }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hoteisRoute.js",
    "groupTitle": "Hoteis__"
  }
] });
