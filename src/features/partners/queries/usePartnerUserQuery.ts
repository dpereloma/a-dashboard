import { useQuery, UseQueryOptions } from 'react-query';

import { fetchPartnerUser } from '../fetches';
import { Responses } from '../types';
import * as Types from 'types';

export const USE_PARTNER_USER_QUERY_KEY = 'partner.user';

export function usePartnerUserQuery(
  userId: string,
  options?: UseQueryOptions<Responses.ResPartnerUser, Types.HttpError>,
) {
  return useQuery(
    [USE_PARTNER_USER_QUERY_KEY, userId],
    () => fetchPartnerUser(userId),
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
