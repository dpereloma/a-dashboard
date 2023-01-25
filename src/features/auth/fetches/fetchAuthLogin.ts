import { AuthTypes } from '..';
import * as Services from '../../../services';

export async function fetchAuthLogin(
  data: AuthTypes.Requests.AuthLoginRequest,
) {
  try {
    const response =
      await Services.apiService.post<AuthTypes.Responses.AuthLoginResponse>(
        '/auth/login',
        data,
      );
    return response.data;
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    return Promise.reject(error.response.data);
  }
}
