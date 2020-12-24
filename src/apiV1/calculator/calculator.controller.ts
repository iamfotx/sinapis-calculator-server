import { Request, Response } from 'express';
import config from '../../config/config';
import { areNumbers } from './calculator.helpers';

export default class CalculatorController {
  public sum = (req: Request, res: Response): Response => {
    const { numbers } = req.body;
    try {
      if (!areNumbers(numbers)) {
        return res.status(400).send({
          success: false,
          message: 'Route only processes numbers.'
        })
      }
      const sum: number = numbers.reduce((acc: number, cur: number) => acc + cur);

      return res.status(201).send({
        success: true,
        message: 'Numbers have been added successfully.',
        data: sum
      });

    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString()
      });
    }
  };
}
