import express from 'express';
import blingModule from './../modules/bling';

const router = express.Router();

router.get('/bling', blingModule.fetch);

router.post('/bling/pedido', blingModule.register);

export default router;
