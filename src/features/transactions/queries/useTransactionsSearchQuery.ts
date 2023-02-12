import { useQuery, UseQueryOptions } from 'react-query';

import { fetchTransactionsSearch } from '../fetches';
import { Requests, Responses } from '../types';
import * as Types from 'types';
import * as Helpers from '../../../helpers';

export const USE_TRANSACTIONS_SEARCH_QUERY_KEY = 'transactions.search';

export function useTransactionsSearchQuery(
  params?: Requests.ReqTransactionsItemsParams,
  pagination?: Helpers.RequestPagination,
  options?: UseQueryOptions<Responses.ResTransactionsItems, Types.HttpError>,
) {
  const queryPagination = { page: 1, size: 20, ...pagination };
  const query = useQuery(
    [USE_TRANSACTIONS_SEARCH_QUERY_KEY, params, pagination],
    () => fetchTransactionsSearch(params, pagination),
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: true,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
      ...options,
    },
  );
  const hasNextPage =
    !!query.data?.items && query.data.items?.length === queryPagination?.size;
  const hasPrevPage = queryPagination.page > 1;

  return {
    ...query,
    hasNextPage,
    hasPrevPage,
  };
}
