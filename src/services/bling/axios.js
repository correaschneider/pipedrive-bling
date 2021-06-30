import axios from 'axios';

import dotenvSafe from 'dotenv-safe';
dotenvSafe.config();

const axiosBling = axios.create({
  baseURL: `https://bling.com.br/Api/v2`,
  params: {
    apikey: process.env.BLING_KEY,
  },
});

axiosBling.interceptors.request.use((res) => {
  console.log(res);
  return res;
});

axiosBling.interceptors.response.use(
  async (res) => {
    if (res.data.retorno && res.data.retorno.erros) {
      let error;

      if (typeof res.data.retorno.erros === 'object') {
        error = res.data.retorno.erros.find((error) => error.erro.cod === 14);
      } else {
        error =
          res.data.retorno.erros.erro.cod === 14
            ? res.data.retorno.erros
            : null;
      }

      if (error) {
        return [];
      }
    }

    return res.data;
  },
  (err) => err.response.data
);

export default axiosBling;
