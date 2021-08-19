import { Request, Response } from 'express';
import { AdminModel } from '../models';

export class AdminController {
  static async getAll(req: Request, res: Response) {
    try {
      const allUsers = await AdminModel.getAll();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(404).json({ message: 'Admin not found' });
    }
  }
}
