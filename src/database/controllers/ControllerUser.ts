import { TUser } from '../../interfaces/TUser';
import User from '../models/User';

export const getAll = (): Promise<User[]> => {
  return User.findAll();
};

export const create = (user: TUser): Promise<User> => {
  return User.create(user);
};
