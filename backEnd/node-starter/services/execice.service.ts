
import { Execice } from '../models/execice.model';
import { IExecice } from '../types';



export async function getOne(cond: any = {}, fields: any = {}): Promise<IExecice> {
  const f = { ...fields, password: 0 };
  return Execice.findOne(cond, f).lean().exec();
}

export async function getAll(fields: any = {}): Promise<IExecice[]> {
  const f = { ...fields, password: 0 };
  return Execice.find({}, f).lean().exec();
}

export async function getById(_id: IExecice['_id'], fields: any = {}): Promise<IExecice> {
  const f = { ...fields, password: 0 };
  return Execice.findOne({ _id }, f).lean().exec();
}

export async function create(execice: IExecice): Promise<IExecice> {
  const c = await Execice.create(execice);
  return this.getById(c?._id);
}

export async function update(_id: IExecice['_id'], execice: IExecice): Promise<IExecice> {
  await Execice.updateOne({ _id }, execice, { omitUndefined: true });
  return this.getById(_id);
}

export async function updateAll(execice: IExecice): Promise<IExecice[]> {
  await Execice.updateMany({ }, execice, { omitUndefined: true });
  return this.getAll();
}

export async function remove(_id: IExecice['_id']): Promise<IExecice> {
  const execice: IExecice = await this.getById(_id)
  await Execice.deleteOne({ _id });
  return execice;
}

export async function removeAll(): Promise<IExecice[]> {
  const execices: IExecice[] = await this.getAll()
  await Execice.deleteMany();
  return execices;
}

export async function count(cond: any = {}): Promise<number> {
  return Execice.countDocuments(cond).exec();
}
