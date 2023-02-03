import { lazy } from 'react';

import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';
import { PrivateRoute } from 'layout/PrivateRoute';

const ChargePoints = Loadable(
  lazy(() => import('views/pages/charge-points/ChargePoints/ChargePoints')),
);
const ChargePointsDetail = Loadable(
  lazy(() =>
    import('views/pages/charge-points/ChargePointsDetail/ChargePointsDetail'),
  ),
);
const CreateChargePoints = Loadable(
  lazy(() =>
    import('views/pages/charge-points/CreateChargePoints/CreateChargePoints'),
  ),
);

const ChargePointsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/charge-points/*',
      element: <PrivateRoute element={<ChargePoints />} />,
    },
    {
      path: '/charge-points/:id/details',
      caseSensitive: true,
      element: <PrivateRoute element={<ChargePointsDetail />} />,
    },
    {
      path: '/charge-points/create',
      element: <PrivateRoute element={<CreateChargePoints />} />,
    },
  ],
};

export default ChargePointsRoutes;
