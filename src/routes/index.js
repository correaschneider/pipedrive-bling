import express from 'express';
const router = express.Router();

import pipedrive from './pipedrive';
import bling from './bling';
import transfer from './transfer';
import mongo from './mongo';

router.use(pipedrive);
router.use(bling);
router.use(transfer);
router.use(mongo);

export default router;
