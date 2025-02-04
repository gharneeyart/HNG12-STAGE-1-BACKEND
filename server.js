import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ClassifyNumberRouter } from './src/routes/classifyNumberRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT ;

app.use(cors());
app.use(express.json());

app.use('/api', ClassifyNumberRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});