import express from 'express';
import { getEmployee, addEmployee, getEmployeeById, editEmployee, deleteEmployee } from '../controller/employeeController.js';

const router = express.Router();

router.get('/get', getEmployee);
router.post('/add', addEmployee);
router.get('/:id', getEmployeeById);
router.put('/:id', editEmployee);
router.delete('/:id', deleteEmployee);

export default router;