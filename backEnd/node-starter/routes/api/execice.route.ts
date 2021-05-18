import { Router } from 'express';
import * as execiceController from '../../controllers/execice.controller';

const router = Router();

router
  .route('/')
  .get(execiceController.getAll)
  .post(execiceController.create)
  .put(execiceController.updateAll)
  .delete(execiceController.removeAll);

router.route('/:id').get(execiceController.getById).put(execiceController.update).delete(execiceController.remove);

export default router;