import express from 'express';
import { AdminController } from '../controllers';

const router = express.Router();

router.get('/', AdminController.getAll);

export default router;
