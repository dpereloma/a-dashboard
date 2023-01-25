import { apiService } from 'services';
import { AuthHelpers, AuthServices, AuthTypes } from '..';

export async function fetchAuthTokenRefresh() {
  try {
    const refreshToken = AuthServices.TokenService.refreshToken();
    const header = await AuthHelpers.authHeader(refreshToken);
    const response = await apiService.post<AuthTypes.SessionToken>(
      '/auth/token/refresh',
      undefined,
      {
        headers: { ...header },
      },
    );
    return response.data;
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    return Promise.reject(error.response.data);
  }
}
