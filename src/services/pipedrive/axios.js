import axios from 'axios';

import dotenvSafe from 'dotenv-safe';
dotenvSafe.config();

const company = process.env.PIPEDRIVE_COMPANY;

const axiosPipedrive = axios.create({
  baseURL: `https://${company}.pipedrive.com/api/v1`,
  params: {
    api_token: process.env.PIPEDRIVE_TOKEN,
  },
});

axiosPipedrive.interceptors.response.use(
  (res) => {
    const { data, additional_data } = res.data;

    return { data, ...additional_data.pagination };
  },
  (err) => err.response.data
);

export default axiosPipedrive;
