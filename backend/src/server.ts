import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { rules } from './rules';
import { Candidate, FlagResult } from './models';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/evaluate', (req, res) => {
  const candidate = req.body as Candidate;
  const results: FlagResult[] = rules.map(rule => rule(candidate));
  res.json(results);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
