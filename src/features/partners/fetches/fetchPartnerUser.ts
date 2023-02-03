import { Responses } from '../types';
import { AuthHelpers } from '../../auth';
import * as Services from '../../../services';
import * as Types from '../../../types';

/**
 * Search clients.
 *
 * - Method: GET
 * - [Swagger Docs](https://ev2go.secreate.dev/swagger/index.html#/partner/get_partners_users__userId_)
 *
 * @param userId - User ID
 *
 * @template TResponse - API response data type
 * @template TError - API error response data type
 */
export async function fetchPartnerUser<
  TResponse = Responses.ResPartnerUser,
  TError = Types.HttpError,
>(userId: string) {
  try {
    const header = await AuthHelpers.authHeader();
    const response = await Services.apiService.get<TResponse>(
      `/partners/users/${userId}`,
      {
        headers: { ...header },
      },
    );
    return response.data;
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    return Promise.reject(error.response.data as TError);
  }
}
