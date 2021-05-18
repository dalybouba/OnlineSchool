import { Course } from "../models/course.model";
import { ICourse } from "../types";





export async function getOne(cond: any = {}, fields: any = {}): Promise<ICourse> {
  const f = { ...fields, password: 0 };
  return Course.findOne(cond, f).lean().exec();
}

export async function getAll(fields: any = {}): Promise<ICourse[]> {
  const f = { ...fields, password: 0 };
  return Course.find({}, f).lean().exec();
}

export async function getById(_id: ICourse['_id'], fields: any = {}): Promise<ICourse> {
  const f = { ...fields, password: 0 };
  return Course.findOne({ _id }, f).lean().exec();
}

export async function create(course: ICourse): Promise<ICourse> {
  const c = await Course.create(course);
  return this.getById(c?._id);
}

export async function update(_id: ICourse['_id'], course: ICourse): Promise<ICourse> {
  await Course.updateOne({ _id }, course, { omitUndefined: true });
  return this.getById(_id);
}

export async function updateAll(course: ICourse): Promise<ICourse[]> {
  await Course.updateMany({ }, course, { omitUndefined: true });
  return this.getAll();
}

export async function remove(_id: ICourse['_id']): Promise<ICourse> {
  const course: ICourse = await this.getById(_id)
  await Course.deleteOne({ _id });
  return course;
}

export async function removeAll(): Promise<ICourse[]> {
  const courses: ICourse[] = await this.getAll()
  await Course.deleteMany();
  return courses;
}

export async function count(cond: any = {}): Promise<number> {
  return Course.countDocuments(cond).exec();
}
