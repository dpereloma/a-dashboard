import { lazy } from 'react';

import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';
import { PrivateRoute } from 'layout/PrivateRoute';
import TeamsDetail from '../views/pages/teams/TeamsDetail/TeamsDetail';

const Teams = Loadable(lazy(() => import('views/pages/teams/Teams/Teams')));
// const ChargePointsDetail = Loadable(lazy(() =>
// import('views/pages/charge-points/ChargePointsDetail/ChargePointsDetail')));

const ChargePointsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/teams',
      element: <PrivateRoute element={<Teams />} />,
    },
    {
      path: '/teams/:id',
      element: <PrivateRoute element={<TeamsDetail />} />,
    },
  ],
};

export default ChargePointsRoutes;
