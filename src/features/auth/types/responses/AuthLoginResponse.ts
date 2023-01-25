import { SessionToken } from '../SessionToken';

export interface AuthLoginResponse {
  token: SessionToken;
  userId: string;
}
