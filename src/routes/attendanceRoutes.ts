import { Router } from 'express';
import {
    getAllRecords,
    addRecord,
    deleteRecord,
    searchRecords
  } from '../controllers/attendanceController';

const router = Router();

router.get('/', getAllRecords);
router.get('/search/:query', searchRecords); // Route for searching records
router.post('/', addRecord);
router.delete('/:id', deleteRecord); // Route for deleting a record

export default router;
