"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
exports.rules = [
    (c) => ({
        field: 'legalStatus',
        passed: ['PR', 'Canadian Citizen'].includes(c.legalStatus),
        message: 'Must be PR or Citizen',
    }),
    (c) => ({
        field: 'inPersonHours',
        passed: c.inPersonHours >= 720,
        message: 'Minimum 720 in-person hours',
    }),
    (c) => ({
        field: 'ielts',
        passed: c.ielts !== undefined && c.ielts >= 7,
        message: 'IELTS ≥ 7',
    }),
    (c) => ({
        field: 'oet',
        passed: c.oet !== undefined && ['A', 'B', 'C', 'D', 'E'].indexOf(c.oet) >= 1,
        message: 'OET ≥ B',
    }),
    (c) => ({
        field: 'celpip',
        passed: c.celpip !== undefined && c.celpip >= 9,
        message: 'CELPIP ≥ 9',
    }),
    (c) => ({
        field: 'englishPracticePct',
        passed: c.englishPracticePct !== undefined && c.englishPracticePct >= 50,
        message: '≥50% recent practice in English',
    }),
    (c) => ({
        field: 'mccqe1Date',
        passed: !!c.mccqe1Date,
        message: 'QE1 or LMCC required',
    }),
    (c) => ({
        field: 'postgradMonths',
        passed: c.postgradMonths !== undefined && (c.postgradMonths >= 24),
        message: 'Postgrad training: ≥24 months (or 12mo+36mo)',
    }),
];
