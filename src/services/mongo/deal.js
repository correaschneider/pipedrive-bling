import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  pedido: {
    numero: Number,
    data: Date,
    vlr: Number,
    cliente: {
      nome: String,
    },
    itens: [
      {
        item: {
          codigo: Number,
          descricao: String,
          qtde: Number,
          vlr_unit: Number,
        },
      },
    ],
  },
});

const Deal = mongoose.model('Deal', schema);

export default Deal;
