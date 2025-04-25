import express from 'express';
import cors from 'cors';
import evaluateRouter from './evaluate';
import saveRouter from './save';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/evaluate', evaluateRouter);
app.use('/save', saveRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});