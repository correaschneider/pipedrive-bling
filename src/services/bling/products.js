import axiosPipedrive from './axios';

export default {
  async find(deal_id) {
    return await axiosPipedrive.get(`deals/${deal_id}/products`);
  },
};
