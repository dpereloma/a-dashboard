import { authActions } from 'store/authSlice';
import { AuthServices } from '..';
import { useAppDispatch } from '../../../store/hooks';
import { useAuthTokenRefreshMutation } from '../queries';

export function useAuthSessionRefresh() {
  const dispatch = useAppDispatch();

  const mutation = useAuthTokenRefreshMutation({
    onSuccess: (data) => {
      const { uid: id, un: username } = AuthServices.TokenService.parse(
        data.accessToken,
      );

      AuthServices.TokenService.setSession(data);
      dispatch(authActions.authSetUser({ id, username }));
      dispatch(authActions.authSetSession(data));
      dispatch(authActions.authSetState(true));
      dispatch(authActions.authSetStorageSynced(true));
    },
  });

  return { refresh: mutation.mutate, ...mutation };
}
