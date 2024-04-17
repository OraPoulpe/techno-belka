import { IGroupInfo } from './groups.interfaces';

export interface IRole {
  id: number;
  name: string;
}

export interface IUserPatch {
  firstname?: string;
  surname?: string;
  lastname?: string;
  password?: string;
  login?: string;
  role?: number;
  houseId?: number|null;
}

export interface IUser {
  id: number;
  firstname: string;
  surname: string;
  lastname: string;
  login: string;
  role: IRole;
  house: IGroupInfo;
  points: number;
  updatedAt: Date;
  createdAt: Date;
}
