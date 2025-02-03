import { Router } from 'express';
import {ClassifyNumberController} from '../controllers/classifyNumberController.js';

const router = Router();
const controller = new ClassifyNumberController();

router.get('/classify-number', controller.classifyNumber.bind(controller));

export { router as ClassifyNumberRouter };