import express from 'express';
const router = express.Router();

import pipedrive from './pipedrive';
import bling from './bling';
import transfer from './transfer';

router.use(pipedrive);
router.use(bling);
router.use(transfer);

export default router;
