import { useQuery, UseQueryOptions } from 'react-query';

import { fetchChargePointsPartnerItems } from '../fetches';
import { Requests, Responses } from '../types';
import * as Types from '../../../types';

export const USE_CHARGE_POINTS_PARTNER_ITEMS_QUERY_KEY =
  'charge.points.partner.items';

export function useChargePointsPartnerItemsQuery(
  partnerId: string,
  params?: Requests.ReqChargePointsPartnerItemsParams,
  options?: UseQueryOptions<
    Responses.ResChargePointsPartnerItemsParams,
    Types.HttpError
  >,
) {
  return useQuery(
    [USE_CHARGE_POINTS_PARTNER_ITEMS_QUERY_KEY, params],
    () => fetchChargePointsPartnerItems(partnerId, params),
    // {
    //   refetchOnWindowFocus: false,
    //   refetchInterval: false,
    //   refetchOnMount: true,
    //   refetchOnReconnect: false,
    //   refetchIntervalInBackground: false,
    //   ...options,
    // },
  );
}
