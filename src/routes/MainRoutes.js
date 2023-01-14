import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { PrivateRoute } from 'layout/PrivateRoute';

const DashboardDefault = Loadable(
  lazy(() => import('views/dashboard/Default')),
);

const UtilsTypography = Loadable(
  lazy(() => import('views/utilities/Typography')),
);
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(
  lazy(() => import('views/utilities/MaterialIcons')),
);
const UtilsTablerIcons = Loadable(
  lazy(() => import('views/utilities/TablerIcons')),
);

const SamplePage = Loadable(lazy(() => import('views/sample-page')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <PrivateRoute element={<DashboardDefault />} />,
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <PrivateRoute element={<DashboardDefault />} />,
        },
      ],
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <PrivateRoute element={<UtilsTypography />} />,
        },
      ],
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <PrivateRoute element={<UtilsColor />} />,
        },
      ],
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <PrivateRoute element={<UtilsShadow />} />,
        },
      ],
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <PrivateRoute element={<UtilsTablerIcons />} />,
        },
      ],
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <PrivateRoute element={<UtilsMaterialIcons />} />,
        },
      ],
    },
    {
      path: 'sample-page',
      element: <PrivateRoute element={<SamplePage />} />,
    },
  ],
};

export default MainRoutes;
