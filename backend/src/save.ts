import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.post('/', (req, res) => {
  const data = req.body;
  const filePath = path.join(__dirname, '..', 'saved-evaluations.json');

  let existing: any[] = [];
  if (fs.existsSync(filePath)) {
    existing = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  existing.push({ timestamp: new Date().toISOString(), ...data });
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  res.status(200).json({ message: 'Saved successfully' });
});

export default router;