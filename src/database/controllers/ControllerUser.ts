import User from '../models/User';

export const getAll = (): Promise<User[]> => {
  return User.findAll();
};

export const create = (data: any): Promise<User> => {
  return User.create({
    name: data.name,
    user: data.user,
    password: data.password,
  });
};
