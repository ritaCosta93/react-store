import type { TUser } from '../types/User';

export interface IAuthenticationRequests {
  // Authentication
  login: (username: string, password: string) => Promise<TUser>;
}
