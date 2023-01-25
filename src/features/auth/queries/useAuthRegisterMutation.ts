import { useMutation, UseMutationOptions } from 'react-query';
import { AuthFetches, AuthTypes } from '..';
import * as Types from '../../../types';

export function useAuthRegisterMutation(
  options?: UseMutationOptions<
    AuthTypes.Responses.AuthRegisterResponse,
    Types.HttpError,
    AuthTypes.Requests.AuthRegisterRequest
  >,
) {
  return useMutation(AuthFetches.fetchAuthRegister, {
    retry: 0,
    ...options,
  });
}
