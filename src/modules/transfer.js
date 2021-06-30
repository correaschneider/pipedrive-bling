import pipedriveService from './../services/pipedrive';
import blingService from './../services/bling';
import mongoService from './../services/mongo';
import converters from '../converters';

const transfer = async (req, res, next) => {
  const resultPipedrive = await pipedriveService.deals.find({ status: 'won' });

  await Promise.all(
    resultPipedrive.data.map(async (deal) => {
      const products = await pipedriveService.products.find(deal.id);
      deal.products = products.data;
    })
  );

  const resultBling = [];
  await Promise.all(
    resultPipedrive.data.map(async (deal) => {
      const dealBling = await converters.toBling(deal);

      const returnBling = await blingService.deals.post(dealBling);
      resultBling.push(returnBling);

      await mongoService.deal.create(dealBling);
    })
  );

  res.send({ resultPipedrive, resultBling });
};

export default {
  transfer,
};
