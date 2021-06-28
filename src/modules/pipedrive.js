import pipedriveService from './../services/pipedrive';

const fetch = async (req, res, next) => {
  const result = await pipedriveService.deals.find({ status: 'won' });

  await result.data.map(async (deal) => {
    deal.products = await pipedriveService.products.find(deal.id);
  });

  await Promise.all(
    result.data.map(async (deal) => {
      const products = await pipedriveService.products.find(deal.id);
      deal.products = products.data;
    }),
  );

  res.send(result);
};

export default {
  fetch,
};
