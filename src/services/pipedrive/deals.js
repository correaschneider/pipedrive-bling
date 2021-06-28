import axiosPipedrive from './axios';

export default {
  async find(filter) {
    return await axiosPipedrive.get('deals', { params: filter });
  },
};
