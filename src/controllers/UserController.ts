import { Request, Response } from 'express';
import { UserModel } from '../models';

export class UserController {
  static async getAll(req: Request, res: Response) {
    try {
      const allUsers = await UserModel.getAll();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(404).json({ message: 'Users not found' });
    }
  }
}
