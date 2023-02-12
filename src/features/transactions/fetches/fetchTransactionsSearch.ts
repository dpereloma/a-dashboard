import { AuthHelpers } from '../../auth';
import * as Services from 'services';
import * as Types from 'types';
import { Requests, Responses } from '../types';
import * as Helpers from '../../../helpers';

/**
 * Search transactions.
 *
 * - Method: GET
 * - [Swagger Docs](https://ev2go.secreate.dev/swagger/index.html#/charging/get_charging_transactions_search_query)
 *
 * @param params - Params
 * @param pagination - Pagination
 *
 * @template TResponse - API response data type
 * @template TError - API error response data type
 */
export async function fetchTransactionsSearch<
  TResponse = Responses.ResTransactionsItems,
  TError = Types.HttpError,
>(
  params?: Requests.ReqTransactionsItemsParams,
  pagination?: Helpers.RequestPagination,
) {
  try {
    const header = await AuthHelpers.authHeader();
    const response = await Services.apiService.get<TResponse>(
      `/charging/transactions/search/query`,
      {
        params: { ...params, ...Helpers.requestPagination(pagination) },
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
