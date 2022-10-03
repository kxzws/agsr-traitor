import authInstance from './instance';
import { ISignInData } from '../types/interfaces';
import { userCard } from './types';

const fetchLoginUser = async (data: ISignInData): Promise<userCard> => {
  try {
    const QUERY_URL = 'login';
    const { login, password } = data;
    const user = {
      email: login,
      password,
    };
    const response = await authInstance.post(QUERY_URL, user);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetchLoginUser;
