import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { IExecice } from '../types';
import * as exerciceService from '../services/execice.service';

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const data: IExecice[] = await exerciceService.getAll();
        res.status(StatusCodes.OK).send(data);
    } catch (err) {
        next(err);
    }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        console.log("req", id)
        const data: IExecice = await exerciceService.getById(id);
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
            question,
            response,
            number,
        } = req.body;
        const data: IExecice = await exerciceService.create({
            title,
            question,
            response,
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
            question,
            response,
            number,
        } = req.body;
        const data: IExecice = await exerciceService.update(id, {
            title,
            question,
            response,
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
            question,
            response,
            number,
        } = req.body;

        const data: IExecice[] = await exerciceService.updateAll({
            title,
            question,
            response,
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
        const data: IExecice = await exerciceService.remove(id);
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
        const data: IExecice[] = await exerciceService.removeAll();
        res.status(StatusCodes.OK).send(data);
    } catch (err) {
        next(err);
    }
}
