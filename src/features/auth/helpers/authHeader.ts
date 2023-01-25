import { AuthExceptions, AuthFetches, AuthServices } from '..';

export async function authHeader(
  token?: string,
): Promise<Record<string, string>> {
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }

  try {
    const accessToken = AuthServices.TokenService.accessToken();
    return { Authorization: `Bearer ${accessToken}` };
  } catch (error) {
    if (!(error instanceof AuthExceptions.AccessTokenExpiredException)) {
      throw error;
    }
  }

  const session = await AuthFetches.fetchAuthTokenRefresh();
  AuthServices.TokenService.setSession(session);

  return authHeader();
}
