import blingService from './../services/bling';

const fetch = async (req, res, next) => {
  const result = await blingService.deals.find();

  res.send(result);
};

const register = async (req, res, next) => {
  const deal = {
    pedido: {
      numero: 2,
      cliente: {
        nome: 'Pedro Schneider',
      },
      itens: [
        {
          item: {
            codigo: '1',
            descricao: 'Produto 1',
            qtde: 1.0,
            vlr_unit: 10.0,
          },
        },
      ],
    },
  };

  const result = await blingService.deals.post(deal);

  /**
    {
      "retorno": {
        "pedidos": [
          {
            "pedido": {
              "numero": "2",
              "idPedido": 13274374591,
              "codigos_rastreamento": {
                "codigo_rastreamento": null
              },
              "volumes": null
            }
          }
        ]
      }
    }
  */

  res.send(result);
};

export default {
  fetch,
  register,
};
