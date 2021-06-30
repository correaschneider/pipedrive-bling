import express from 'express';
import mongoose from 'mongoose';
import dotenvSafe from 'dotenv-safe';

dotenvSafe.config();

mongoose.Promise = global.Promise;

import router from './routes/index';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.NODE_PORT, () =>
      console.log(`Runnig at port ${process.env.NODE_PORT}`)
    );
  });
