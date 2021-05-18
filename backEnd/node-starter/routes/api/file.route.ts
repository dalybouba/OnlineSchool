import {Router} from "express";
import {getFiles, getFileById, saveFile, updateFile, deleteFile} from "../../controllers/file.controller";
import upload from '../../libs/multer';

const router = Router();

router.route('/')
    .post(upload.single('image'), saveFile)
    .get(getFiles);

router.route('/:id')
    .get(getFileById)
    .delete(deleteFile)
    .put(updateFile)

export default router;