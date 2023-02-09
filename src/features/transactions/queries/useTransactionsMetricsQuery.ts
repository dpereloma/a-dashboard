import { useQuery, UseQueryOptions } from 'react-query';

import { fetchTransactionsMetrics } from '../fetches';
import { Responses } from '../types';
import * as Types from 'types';

export const USE_TRANSACTION_METRICS_QUERY_KEY = 'transaction.metrics';

export function useTransactionMetricsQuery(
  transactionId?: string,
  options?: UseQueryOptions<Responses.ResTransactionsMetrics, Types.HttpError>,
) {
  return useQuery(
    [USE_TRANSACTION_METRICS_QUERY_KEY, transactionId],
    () => fetchTransactionsMetrics(transactionId),
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
