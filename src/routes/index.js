import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import ChargePointsRoutes from './ChargePointsRoutes';
import TeamsRoutes from './TeamsRoutes';
import ChargingSitesRoutes from './ChargingSitesRoutes';

const ThemeRoutes = () => {
  return useRoutes([
    MainRoutes,
    AuthenticationRoutes,
    ChargePointsRoutes,
    TeamsRoutes,
    ChargingSitesRoutes,
  ]);
};
export default ThemeRoutes;
