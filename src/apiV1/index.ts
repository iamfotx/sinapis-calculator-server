import { Router } from 'express';
import calculator from './calculator/calculator.route';

const router: Router = Router();

router.use('/calculator', calculator);

export default router;
