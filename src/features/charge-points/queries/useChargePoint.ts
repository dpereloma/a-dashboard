import { useQuery, UseQueryOptions } from 'react-query';

import { fetchChargePoint } from '../fetches';
import { Responses } from '../types';
import * as Types from 'types';

export const USE_CHARGE_POINT_QUERY_KEY = 'charge.point';

export function useChargePoint(
  chargePointId: string,
  options?: UseQueryOptions<Responses.ResChargePoint, Types.HttpError>,
) {
  return useQuery(
    [USE_CHARGE_POINT_QUERY_KEY, chargePointId],
    () => fetchChargePoint(chargePointId),
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
