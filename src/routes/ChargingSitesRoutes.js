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
const CreateChargingSite = Loadable(
  lazy(() =>
    import('views/pages/charging-sites/CreateChargingSite/CreateChargingSite'),
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
    {
      path: '/charging-sites/create',
      element: <PrivateRoute element={<CreateChargingSite />} />,
    },
  ],
};

export default ChargingSitesRoutes;
