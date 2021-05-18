export interface ICourse {
    _id?: any;
    title: string;
    content: string;
    number: number;
    url?:string;
    isAvailable?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
  