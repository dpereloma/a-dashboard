import { useEffect } from 'react';
// import { useAuthLogoutMutation } from '..';
import { useAppSelector } from '../../../store/hooks';
// import { useUserByUsernameQuery } from '../../user';
import { useAuthSessionRefresh } from './useAuthSessionRefresh';
import { useAuthSessionRestore } from './useAuthSessionRestore';
import * as AuthSelectors from '../../../store/authSelectors';

export function useAuth() {
  const authState = useAppSelector(AuthSelectors.getAuthState);
  const { isLoading: isSessionRefreshing } = useAuthSessionRefresh();
  const { restore } = useAuthSessionRestore();
  // const signOutMutation = useAuthLogoutMutation();

  // const userQuery = useUserByUsernameQuery(authState.user?.id);;
  // eslint-disable-next-line react-hooks/exhaustive-deps

  // const signOut = useCallback(() => signOutMutation.mutate(), []);
  useEffect(() => {
    if (!authState.isStorageSynced && !authState.isLoading) {
      restore();
    }
  }, [authState.isLoading, authState.isStorageSynced, restore]);

  return {
    ...authState,
    isSessionRefreshing,
    // signOut,
    // signOutMutation,
    // userQuery,
  };
}
