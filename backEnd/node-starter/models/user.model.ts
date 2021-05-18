import { Document, model, Schema } from 'mongoose';
import { hash } from 'bcryptjs';
import { IUser } from '../types';

type IUserDocument = Document & IUser;

const userSchema: Schema = new Schema(
  {
    email: { type: String, lowercase: true },
    userName: { type: String },
    password: { type: String },
    isAdmin: { type: Boolean },
    isTeacher: { type: Boolean },
    isStudent: { type: Boolean },
    isIndividual: { type: Boolean },
    background: { type: String },
    language: { type: String },
    age: { type: String },
    level: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre<IUserDocument>('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hashPassword(this.password);
  }
});

function hashPassword(password: string): Promise<string> {
  return hash(password, 8);
}

export const User = model<IUserDocument>('User', userSchema);
