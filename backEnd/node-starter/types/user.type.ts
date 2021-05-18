export interface IUser {
  _id?: any;
  email: string;
  userName: string;
  isAdmin: boolean;
  isTeacher: boolean;
  isStudent: boolean;
  isIndividual: boolean;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  background?: string;
  language?: string;
  age?: string;
  level?: string;
}
