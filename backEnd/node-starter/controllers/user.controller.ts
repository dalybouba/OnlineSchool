import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { IUser } from '../types';
import * as userService from '../services/user.service';

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const data: IUser[] = await userService.getAll();
    res.status(StatusCodes.OK).send(data);
  } catch (err) {
    next(err);
  }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    console.log("req", id)
    const data: IUser = await userService.getById(id);
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
      userName,
      password,
      email,
      isAdmin,
      isTeacher,
      isStudent,
      isIndividual,
      background,
      language,
      age,
      level,
    } = req.body;
    const data: IUser = await userService.create({
      userName,
      password,
      email,
      isAdmin,
      isTeacher,
      isStudent,
      isIndividual,
      background,
      language,
      age,
      level,
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
      userName,
      password,
      email,
      isAdmin,
      isTeacher,
      isStudent,
      isIndividual,
      background,
      language,
      age,
      level,
    } = req.body;
    const data: IUser = await userService.update(id, {
      userName,
      password,
      email,
      isAdmin,
      isTeacher,
      isStudent,
      isIndividual,
      background,
      language,
      age,
      level,
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
      userName,
      password,
      email,
      isAdmin,
      isTeacher,
      isStudent,
      isIndividual,
      background,
      language,
      age,
      level,
    } = req.body;

    const data: IUser[] = await userService.updateAll({
      userName,
      password,
      email,
      isAdmin,
      isTeacher,
      isStudent,
      isIndividual,
      background,
      language,
      age,
      level,
    });
    res.status(StatusCodes.OK).send(data);
  } catch (err) {
    next(err);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const data: IUser = await userService.remove(id);
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
    const data: IUser[] = await userService.removeAll();
    res.status(StatusCodes.OK).send(data);
  } catch (err) {
    next(err);
  }
}
