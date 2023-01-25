import { AuthHelpers } from '..';
import * as Services from '../../../services';

export async function fetchAuthLogout() {
  const header = await AuthHelpers.authHeader();
  const response = await Services.apiService.post('/auth/logout', undefined, {
    headers: { ...header },
  });
  return response.data;
}
