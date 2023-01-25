import { authActions } from 'store/authSlice';
import { AuthServices } from '..';
import { useAppDispatch } from '../../../store/hooks';
import { useAuthLoginMutation } from '../queries';

export function useAuthLogin() {
  const dispatch = useAppDispatch();

  const mutation = useAuthLoginMutation({
    onSuccess: (data: any) => {
      const { uid: id, un: username } = AuthServices.TokenService.parse(
        data.token.accessToken,
      );

      AuthServices.TokenService.setSession(data.token);
      dispatch(authActions.authSetUser({ id, username }));
      dispatch(authActions.authSetSession(data.token));
      dispatch(authActions.authSetState(true));
      dispatch(authActions.authSetStorageSynced(true));
    },
  });

  return { login: mutation.mutate, ...mutation };
}
