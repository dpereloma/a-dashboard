import {
  CompareArrows,
  Power,
  Receipt,
  RocketLaunch,
  Settings,
  Timeline,
  WorkspacePremium,
} from '@mui/icons-material';
import { MenuItemsIds } from './ChargePointsDetail.types';

export const menuItems = [
  {
    icon: <CompareArrows />,
    text: 'Overview',
    id: MenuItemsIds.OVERVIEW,
  },
  {
    icon: <Settings />,
    text: 'Charge point settings',
    id: MenuItemsIds.SETTINGS,
  },
  {
    icon: <Power />,
    text: 'Charge sessions',
    id: MenuItemsIds.CHARGE_SESSIONS,
  },
  {
    icon: <Receipt />,
    text: 'Transactions',
    id: MenuItemsIds.TRANSACTIONS,
  },
  {
    icon: <WorkspacePremium />,
    text: 'Subscriptions',
    id: MenuItemsIds.SUBSCRIPTIONS,
  },
  {
    icon: <RocketLaunch />,
    text: 'Charge point functionalities',
    id: MenuItemsIds.FUNCTIONALITIES,
  },
  {
    icon: <Timeline />,
    text: 'Connection',
    id: MenuItemsIds.CONNECTION,
  },
  {
    icon: <Timeline />,
    text: 'Deeplink',
    id: MenuItemsIds.DEEPLINK,
  },
];
