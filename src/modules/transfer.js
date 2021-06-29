import pipedriveService from './../services/pipedrive';
import blingService from './../services/bling';
import converters from '../converters';

const transfer = async (req, res, next) => {
  const resultPipedrive = await pipedriveService.deals.find({ status: 'won' });

  await Promise.all(
    resultPipedrive.data.map(async (deal) => {
      const products = await pipedriveService.products.find(deal.id);
      deal.products = products.data;
    })
  );

  const resultBling = await Promise.all(
    resultPipedrive.data.map(async (deal) => {
      const dealBling = await converters.toBling(deal);
      return await blingService.deals.post(dealBling);
    })
  );

  res.send({ resultPipedrive, resultBling });
};

export default {
  transfer,
};
