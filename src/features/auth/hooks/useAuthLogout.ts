import { useQueryClient } from 'react-query';
import { AuthServices } from '..';
import { useAppDispatch } from '../../../store/hooks';
import { authActions } from '../../../store/authSlice';
import { useAuthLogoutMutation } from '../queries';

export function useAuthLogout() {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const clearStore = () => {
    dispatch(authActions.authClearState());
  };

  const clearStorage = () => {
    AuthServices.TokenService.removeSession();
  };

  const clearCache = () => {
    queryClient.clear();
  };

  const clearAll = () => {
    clearStore();
    clearStorage();
    clearCache();
  };

  const mutation = useAuthLogoutMutation({
    onSuccess: clearStore,
    onSettled: clearStorage,
  });

  return {
    logout: mutation.mutate,
    clearStore,
    clearStorage,
    clearCache,
    clearAll,
    ...mutation,
  };
}
