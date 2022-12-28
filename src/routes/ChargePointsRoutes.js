import { lazy } from 'react';

import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';
import { PrivateRoute } from 'layout/PrivateRoute';

const ChargePoints = Loadable(lazy(() => import('views/pages/charge-points/ChargePoints/ChargePoints')));
const ChargePointsDetail = Loadable(lazy(() => import('views/pages/charge-points/ChargePointsDetail/ChargePointsDetail')));

const ChargePointsRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/charge-points',
            element: <PrivateRoute element={<ChargePoints />} />
        },
        {
            path: '/charge-points/:id',
            element: <PrivateRoute element={<ChargePointsDetail />} />
        }
    ]
};

export default ChargePointsRoutes;
