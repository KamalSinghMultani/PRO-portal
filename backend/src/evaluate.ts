import express from 'express';
const router = express.Router();

interface Candidate {
  name: string;
  nacExam?: number;
  mccqe1?: number;
  practiceGapMonths?: number;
  canadianExperience?: string;
}

interface Flag {
  code: string;
  msg: string;
  overridden?: boolean;
}

router.post('/', (req, res) => {
  const c: Candidate = req.body;
  const flags: Flag[] = [];

  if (c.nacExam === undefined || c.nacExam < 70) {
    flags.push({ code: 'NAC_FAIL', msg: c.nacExam === undefined ? 'NAC exam missing' : 'NAC exam score below 70' });
  }

  if (c.mccqe1 === undefined || c.mccqe1 < 350) {
    flags.push({ code: 'MCC_FAIL', msg: c.mccqe1 === undefined ? 'MCCQE1 missing' : 'MCCQE1 score below 350' });
  }

  if (c.practiceGapMonths && c.practiceGapMonths > 24) {
    flags.push({ code: 'GAP_TOO_LONG', msg: 'Practice gap exceeds 24 months' });
  }

  if (!c.canadianExperience || c.canadianExperience.toLowerCase() !== 'yes') {
    flags.push({ code: 'NO_CA_EXP', msg: 'Canadian experience missing or insufficient' });
  }

  res.json(flags);
});

export default router;