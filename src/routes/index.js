import express from 'express';
const router = express.Router();

import pipedrive from './pipedrive';
import bling from './bling';

router.use(pipedrive);
router.use(bling);

export default router;
