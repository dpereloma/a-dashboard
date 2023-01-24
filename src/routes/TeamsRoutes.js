import { lazy } from 'react';

import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';
import { PrivateRoute } from 'layout/PrivateRoute';

const Teams = Loadable(lazy(() => import('views/pages/teams/Teams/Teams')));
const TeamsDetail = Loadable(
  lazy(() => import('views/pages/teams/TeamsDetail/TeamsDetail')),
);
const CreateTeam = Loadable(
  lazy(() => import('views/pages/teams/CreateTeam/CreateTeam')),
);

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
    {
      path: '/teams/create',
      element: <PrivateRoute element={<CreateTeam />} />,
    },
  ],
};

export default ChargePointsRoutes;
