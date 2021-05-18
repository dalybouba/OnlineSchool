import { Router } from 'express';
import * as courseController from '../../controllers/course.controller';

const router = Router();

router
  .route('/')
  .get(courseController.getAll)
  .post(courseController.create)
  .put(courseController.updateAll)
  .delete(courseController.removeAll);

router.route('/:id').get(courseController.getById).put(courseController.update).delete(courseController.remove);

export default router;