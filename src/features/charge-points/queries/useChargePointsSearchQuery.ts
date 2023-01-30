import { useQuery, UseQueryOptions } from 'react-query';

import { fetchChargePointsSearch } from '../fetches';
import { Requests, Responses } from '../types';
import * as Types from '../../../types';

export const USE_CHARGE_POINTS_SEARCH_QUERY_KEY = 'charge.points.search';

export function useChargePointsSearchQuery(
  params?: Requests.ReqChargePointsPartnerItemsParams,
  options?: UseQueryOptions<
    Responses.ResChargePointsPartnerItemsParams,
    Types.HttpError
  >,
) {
  return useQuery(
    [USE_CHARGE_POINTS_SEARCH_QUERY_KEY, params],
    () => fetchChargePointsSearch(params),
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
