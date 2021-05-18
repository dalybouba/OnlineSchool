import { Router } from 'express';
import expressJwt from 'express-jwt';
import { authHandler } from '../../shared/middlewares';

import config from '../../bin/config';

import BaseRouter from './base.route';
import UserRouter from './user.route';
import ExeciceRouter from './execice.route';
import CourseRouter from './course.route';
import FilesRouter from './file.route';

const router = Router();

router.use(
  expressJwt({
    algorithms: ['sha1', 'RS256', 'HS256'],
    secret: config.SECRET_KEY,
  }),
  authHandler,
);

router.use('/', BaseRouter);
router.use('/users', UserRouter);
router.use('/execices', ExeciceRouter);
router.use('/courses', CourseRouter);
router.use('/files', FilesRouter);


export default router;
