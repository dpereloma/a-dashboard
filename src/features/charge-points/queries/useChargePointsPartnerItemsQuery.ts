import { useQuery, UseQueryOptions } from 'react-query';

import { fetchChargePointsPartnerItems } from '../fetches';
import { Requests, Responses } from '../types';
import * as Types from 'types';
import * as Helpers from 'helpers';

export const USE_CHARGE_POINTS_PARTNER_ITEMS_QUERY_KEY =
  'charge.points.partner.items';

export function useChargePointsPartnerItemsQuery(
  partnerId: string,
  params?: Requests.ReqChargePointsPartnerItemsParams,
  pagination?: Helpers.RequestPagination,
  options?: UseQueryOptions<
    Responses.ResChargePointsPartnerItemsParams,
    Types.HttpError
  >,
) {
  const queryPagination = { page: 1, size: 20, ...pagination };
  const query = useQuery(
    [USE_CHARGE_POINTS_PARTNER_ITEMS_QUERY_KEY, partnerId, params, pagination],
    () => fetchChargePointsPartnerItems(partnerId, params, pagination),
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
