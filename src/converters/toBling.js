import moment from 'moment';

const toBling = async (dealPipedrive) => {
  const dealBling = {
    pedido: {
      numero: dealPipedrive.id,
      data: moment(dealPipedrive.won_time, 'DD/MM/YYYY'),
      vlr: dealPipedrive.value,
      cliente: {
        nome: dealPipedrive.person_id.name,
      },
      itens: [],
    },
  };

  await Promise.all(
    dealPipedrive.products.map((product) => {
      dealBling.pedido.itens.push({
        item: {
          codigo: product.id,
          descricao: product.name,
          qtde: product.quantity,
          vlr_unit: product.item_price,
        },
      });
    })
  );

  return dealBling;
};

export default toBling;
