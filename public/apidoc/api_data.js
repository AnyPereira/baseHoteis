define({ "api": [
  {
    "type": "get",
    "url": "/hoteis",
    "title": "",
    "group": "Hoteis__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "hoteis",
            "description": "<p>Base de Hoteis</p>"
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
    "groupTitle": "Hoteis__",
    "name": "GetHoteis"
  }
] });
