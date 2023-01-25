import { useCallback } from 'react';
import { authActions } from 'store/authSlice';
import { AuthServices } from '..';
import { useAppDispatch } from '../../../store/hooks';
import { useAuthSessionRefresh } from './useAuthSessionRefresh';

export function useAuthSessionRestore() {
  const dispatch = useAppDispatch();
  const authSessionRefresh = useAuthSessionRefresh();

  const restore = useCallback(
    () => {
      const session = AuthServices.TokenService.session();

      dispatch(authActions.authSetStorageSynced(true));
      dispatch(authActions.authSetSession(session));

      if (!session) {
        return;
      }

      if (AuthServices.TokenService.isExpired(session.accessTokenExpiresAt)) {
        authSessionRefresh.refresh();
      } else {
        const { uid: id, un: username } = AuthServices.TokenService.parse(
          session.accessToken,
        );
        dispatch(authActions.authSetUser({ id, username }));
        dispatch(authActions.authSetState(true));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return { restore };
}
