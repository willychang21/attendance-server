import { Router } from 'express';
import {
  getAllRecords,
  addRecord,
  deleteRecord,
  searchRecords
} from '../controllers/attendanceController';

const router = Router();

router.get('/', getAllRecords); // Route for getting all records
router.post('/', addRecord); // Route for adding a record
router.delete('/:id', deleteRecord); // Route for deleting a record
router.get('/search/:query', searchRecords); // Route for searching records

export default router;
