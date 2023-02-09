import { Responses } from '../types';
import { AuthHelpers } from '../../auth';
import * as Services from 'services';
import * as Types from 'types';

/**
 * Get transactions metrics.
 *
 * - Method: GET
 * - [Swagger Docs](https://ev2go.secreate.dev/swagger/index.html#/charging/get_charging_transactions__transactionId__metrics)
 *
 * @param transactionId - Transaction ID
 *
 * @template TResponse - API response data type
 * @template TError - API error response data type
 */
export async function fetchTransactionsMetrics<
  TResponse = Responses.ResTransactionsMetrics,
  TError = Types.HttpError,
>(transactionId?: string) {
  try {
    const header = await AuthHelpers.authHeader();
    const response = await Services.apiService.get<TResponse>(
      `/charging/transactions/${transactionId}/metrics`,
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
