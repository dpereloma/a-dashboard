import { Navigate } from 'react-router';

import { useAuth } from '../features/auth/hooks';

export const PrivateRoute = ({ element }) => {
  const { isAuthed } = useAuth();

  return isAuthed ? element : <Navigate to="/pages/login/login3" />;
};
