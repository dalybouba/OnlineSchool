import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICourse } from '../types';
import * as courseService from '../services/course.service';

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const data: ICourse[] = await courseService.getAll();
        res.status(StatusCodes.OK).send(data);
    } catch (err) {
        next(err);
    }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        console.log("req", id)
        const data: ICourse = await courseService.getById(id);
        if (data) {
            res.status(StatusCodes.OK).send(data);
        } else {
            res.status(StatusCodes.NOT_FOUND).send();
        }
    } catch (err) {
        next(err);
    }
}

export async function create(req: Request, res: Response, next: NextFunction) {
    try {
        const {
            title,
            content,
            number,
        } = req.body;
        const data: ICourse = await courseService.create({
            title,
            content,
            number,
        });
        res.status(StatusCodes.OK).send(data);
    } catch (err) {
        next(err);
    }
}

export async function update(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const {
            title,
            content,
            number,
        } = req.body;
        const data: ICourse = await courseService.update(id, {
            title,
            content,
            number,
        });
        if (data) {
            res.status(StatusCodes.OK).send(data);
        } else {
            res.status(StatusCodes.NOT_FOUND).send();
        }
    } catch (err) {
        next(err);
    }
}

export async function updateAll(req: Request, res: Response, next: NextFunction) {
    try {
        const {
            title,
            content,
            number,
        } = req.body;

        const data: ICourse[] = await courseService.updateAll({
            title,
            content,
            number,
        });
        res.status(StatusCodes.OK).send(data);
    } catch (err) {
        next(err);
    }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const data: ICourse = await courseService.remove(id);
        if (data) {
            res.status(StatusCodes.OK).send(data);
        } else {
            res.status(StatusCodes.NOT_FOUND).send();
        }
    } catch (err) {
        next(err);
    }
}

export async function removeAll(req: Request, res: Response, next: NextFunction) {
    try {
        const data: ICourse[] = await courseService.removeAll();
        res.status(StatusCodes.OK).send(data);
    } catch (err) {
        next(err);
    }
}
