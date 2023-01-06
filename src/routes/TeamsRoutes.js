import { lazy } from 'react';

import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';
import { PrivateRoute } from 'layout/PrivateRoute';

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
        // {
        //     path: '/charge-points/:id',
        //     element: <PrivateRoute element={<ChargePointsDetail />} />
        // }
    ],
};

export default ChargePointsRoutes;
