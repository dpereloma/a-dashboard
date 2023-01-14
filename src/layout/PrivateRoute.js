import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import { getIsAuth } from 'store/selectors';

export const PrivateRoute = ({ element }) => {
  const isAuth = useSelector(getIsAuth);

  return isAuth ? element : <Navigate to="/pages/login/login3" />;
};
