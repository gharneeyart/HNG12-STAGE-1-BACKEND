import { ClassifyNumberService } from '../services/classifyNumberService.js';

const classifyNumberService = new ClassifyNumberService();

class ClassifyNumberController {
    async classifyNumber(req, res) {
        const { number } = req.query;

        if (!number || isNaN(number)) {
            return res.status(400).json({ number, error: true });
        }

        const num = parseInt(number, 10);
        const classification = await classifyNumberService.classify(num);

        return res.status(200).json(classification);
    }
}

export  {ClassifyNumberController};