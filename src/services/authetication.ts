import axios from 'axios';

import type { IApi } from '../interfaces/api';
import type { IAuthenticationRequests } from '../interfaces/authenticationRequests';
import type { TUser } from '../types/User';

const authURL: IApi['baseUrl'] = 'https://dummyjson.com/auth';

export const authenticationApi: IAuthenticationRequests = {
  login: async (username: string, password: string): Promise<TUser> => {
    try {
      const res = await axios.post<TUser>(
        `${authURL}/login`,
        {
          username,
          password,
          expiresInMins: 30
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      return res.data;
    } catch (err: any) {
      if (err.response?.status === 401) {
        throw new Error('Utilizador ou senha inválidos');
      }
      throw err;
    }
  }
};
