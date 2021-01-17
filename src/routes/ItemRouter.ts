import { Router } from 'express';
import ItemController from '../controllers/ItemController';

const router = Router();

router.get('/items', ItemController.index);
router.post('/items/create', ItemController.create);
router.post('/items/delete', ItemController.softDelete);

export default router;