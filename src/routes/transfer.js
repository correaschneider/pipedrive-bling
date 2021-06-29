import express from 'express';
import transferModule from './../modules/transfer';

const router = express.Router();

router.get('/transfer', transferModule.transfer);

export default router;
