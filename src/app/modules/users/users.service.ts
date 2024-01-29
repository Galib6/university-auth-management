import config from '../../../config';
import { IUser } from './users.interface';
import { User } from './users.model';
import { generateUserId } from './users.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  //AUTO GENERATED ID
  user.id = await generateUserId();
  //default password
  if (!user.password) {
    user.password = config.defaultPassword as string;
  }
  const createdUser = await User.create(user);
  if (!createdUser === null) {
    throw new Error('Failed to create user');
  }
  return createdUser;
};

export default {
  createUser,
};
