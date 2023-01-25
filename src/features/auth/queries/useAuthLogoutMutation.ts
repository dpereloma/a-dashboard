import { useMutation, UseMutationOptions } from 'react-query';
import { AuthFetches } from '..';
import * as Types from '../../../types';

export function useAuthLogoutMutation(
  options?: UseMutationOptions<unknown, Types.HttpError>,
) {
  return useMutation(AuthFetches.fetchAuthLogout, { retry: 0, ...options });
}
