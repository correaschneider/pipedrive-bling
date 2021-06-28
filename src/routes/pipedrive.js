import express from 'express';
import pipedriveModule from './../modules/pipedrive';

const router = express.Router();

router.get('/pipedrive', pipedriveModule.fetch);

export default router;
