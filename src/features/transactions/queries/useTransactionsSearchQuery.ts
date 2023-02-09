import { useQuery, UseQueryOptions } from 'react-query';

import { fetchTransactionsSearch } from '../fetches';
import { Requests, Responses } from '../types';
import * as Types from 'types';

export const USE_TRANSACTIONS_SEARCH_QUERY_KEY = 'transactions.search';

export function useTransactionsSearchQuery(
  params?: Requests.ReqTransactionsItemsParams,
  options?: UseQueryOptions<Responses.ResTransactionsItems, Types.HttpError>,
) {
  return useQuery(
    [USE_TRANSACTIONS_SEARCH_QUERY_KEY, params],
    () => fetchTransactionsSearch(params),
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: true,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
      ...options,
    },
  );
}
