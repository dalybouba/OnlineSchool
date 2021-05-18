import { Document, model, Schema } from 'mongoose';
import { IExecice } from '../types';


type IExeciceDocument = Document & IExecice;

const execiceSchema: Schema = new Schema(
  {
    title: { type: String, lowercase: true },
    question: { type: String },
    response: { type: String },
    isAvailable: { type: Boolean },
    number: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Execice = model<IExeciceDocument>('Exercice', execiceSchema);