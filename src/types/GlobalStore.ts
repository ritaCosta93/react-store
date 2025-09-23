import type { TLoginResponse, TUser } from './User';

export type TGlobalStore = {
  authenticated: boolean;
  user: TUser | null;
  login: (username: string, password: string) => Promise<TLoginResponse>;
};
