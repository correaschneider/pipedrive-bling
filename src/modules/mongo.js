import Deal from './../services/mongo';

const persiste = (req, res, next) => {
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

  Deal.create(deal);
};

export default {
  persiste,
};
