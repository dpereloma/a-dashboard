import { useMutation, UseMutationOptions } from 'react-query';
import { AuthFetches, AuthTypes } from '..';
import * as Types from '../../../types';

export function useAuthLoginMutation(
  options?: UseMutationOptions<
    AuthTypes.Responses.AuthLoginResponse,
    Types.HttpError,
    AuthTypes.Requests.AuthLoginRequest
  >,
) {
  return useMutation(AuthFetches.fetchAuthLogin, {
    retry: 0,
    ...options,
  });
}
