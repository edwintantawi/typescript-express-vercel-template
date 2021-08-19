import { Request, Response } from 'express';
import { EndpointModel } from '../models';

export class MainController {
  static async getAll(req: Request, res: Response) {
    try {
      const endpoints = await EndpointModel.getAll();
      res.render('index', { endpoints });
    } catch (error) {
      res.status(404).json({ message: 'Endpoint not found' });
    }
  }
}
