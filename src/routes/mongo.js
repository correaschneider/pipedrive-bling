import express from 'express';
import mongoModule from './../modules/mongo';

const router = express.Router();

router.get('/mongo', mongoModule.fetch);

export default router;
