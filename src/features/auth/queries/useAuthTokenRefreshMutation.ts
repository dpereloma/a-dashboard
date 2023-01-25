import { useMutation, UseMutationOptions } from 'react-query';
import { AuthFetches } from '..';
import { SessionToken } from '../types';
import * as Types from '../../../types';

export function useAuthTokenRefreshMutation(
  options?: UseMutationOptions<SessionToken, Types.HttpError>,
) {
  return useMutation(AuthFetches.fetchAuthTokenRefresh, {
    retry: 0,
    ...options,
  });
}
