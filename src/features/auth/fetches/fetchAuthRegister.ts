import { AuthTypes } from '..';
import * as Services from '../../../services';

export async function fetchAuthRegister(
  data: AuthTypes.Requests.AuthRegisterRequest,
) {
  try {
    const response =
      await Services.apiService.post<AuthTypes.Responses.AuthRegisterResponse>(
        '/partners/legal/register',
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