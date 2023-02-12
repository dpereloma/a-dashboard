import { lazy } from 'react';

import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';
import { PrivateRoute } from 'layout/PrivateRoute';

const Transactions = Loadable(
  lazy(() => import('views/pages/transactions/Transactions/Transactions')),
);
const TransactionsDetail = Loadable(
  lazy(() =>
    import('views/pages/transactions/TransactionsDetail/TransactionsDetail'),
  ),
);

const TransactionsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/transactions/*',
      element: <PrivateRoute element={<Transactions />} />,
    },
    {
      path: '/transactions/:id/details',
      caseSensitive: true,
      element: <PrivateRoute element={<TransactionsDetail />} />,
    },
  ],
};

export default TransactionsRoutes;
