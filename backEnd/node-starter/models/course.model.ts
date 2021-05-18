import { Document, model, Schema } from 'mongoose';
import { ICourse } from '../types';



type ICourseDocument = Document & ICourse;

const courseSchema: Schema = new Schema(
  {
    title: { type: String, lowercase: true },
    content: { type: String },
    url: { type: String },
    isAvailable: { type: Boolean },
    number: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Course = model<ICourseDocument>('Course', courseSchema);