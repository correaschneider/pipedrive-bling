import axiosPipedrive from './axios';
import json2xml from 'json2xml';

export default {
  async find() {
    return await axiosPipedrive.get('pedidos/json/');
  },

  async post(deal) {
    return await axiosPipedrive.post('pedido/json/', `xml=${json2xml(deal)}`);
  },
};
