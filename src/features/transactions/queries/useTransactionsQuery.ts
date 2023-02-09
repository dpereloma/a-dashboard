import { useQuery, UseQueryOptions } from 'react-query';

import { fetchTransaction } from '../fetches';
import { Responses } from '../types';
import * as Types from 'types';

export const USE_TRANSACTION_QUERY_KEY = 'transaction';

export function useTransactionQuery(
  transactionId?: string,
  options?: UseQueryOptions<Responses.ResTransaction, Types.HttpError>,
) {
  return useQuery(
    [USE_TRANSACTION_QUERY_KEY, transactionId],
    () => fetchTransaction(transactionId),
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
