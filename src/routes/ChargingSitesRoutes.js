import { lazy } from 'react';

import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';
import { PrivateRoute } from 'layout/PrivateRoute';

const ChargingSites = Loadable(
  lazy(() => import('views/pages/charging-sites/ChargingSites/ChargingSites')),
);
const ChargingSitesDetail = Loadable(
  lazy(() =>
    import(
      'views/pages/charging-sites/ChargingSitesDetail/ChargingSitesDetail'
    ),
  ),
);

const ChargingSitesRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/charging-sites',
      element: <PrivateRoute element={<ChargingSites />} />,
    },
    {
      path: '/charging-sites/:id',
      element: <PrivateRoute element={<ChargingSitesDetail />} />,
    },
  ],
};

export default ChargingSitesRoutes;
