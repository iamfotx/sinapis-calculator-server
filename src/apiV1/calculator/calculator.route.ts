import { Router } from 'express';
import Controller from './calculator.controller';

const calculator: Router = Router();
const controller = new Controller();

// Sum
calculator.post('/sum', controller.sum);

export default calculator;
