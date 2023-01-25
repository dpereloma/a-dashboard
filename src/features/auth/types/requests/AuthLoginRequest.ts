export interface AuthLoginRequest {
  details?: {
    appVer: string;
    browser: string;
    platform: string;
  };
  password: string;
  username: string;
}
