export interface AuthLoginResponse {
  token: {
    accessToken: string;
    accessTokenExpiresAt: string;
    refreshToken: string;
    refreshTokenExpiresAt: string;
    sessionId: string;
  };
  userId: string;
}
