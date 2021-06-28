import dotenvSafe from 'dotenv-safe';
dotenvSafe.config();

import express from 'express';
import logger from 'morgan';

import router from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(process.env.NODE_PORT, () =>
  console.log(`Runnig at port ${process.env.NODE_PORT}`)
);
