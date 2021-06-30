import dealService from './../services/mongo';

const fetch = async (req, res, next) => {
  const { data } = req.params;

  const filter = {};
  if (data) {
    filter.pedido.data = data;
  }

  const result = await dealService.deal.find(filter);

  res.send(result);
};

export default {
  fetch,
};
