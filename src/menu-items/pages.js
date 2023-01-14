import { IconKey } from '@tabler/icons';

const icons = {
  IconKey,
};

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.IconKey,
      children: [
        {
          id: 'login3',
          title: 'Login',
          type: 'item',
          url: '/pages/login/login3',
          target: false,
        },
        {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/pages/register/register3',
          target: true,
        },
      ],
    },
    {
      id: 'teams',
      title: 'Teams',
      type: 'item',
      url: '/teams',
      icon: icons.IconKey,
    },
    {
      id: 'charge-points',
      title: 'Charge Points',
      type: 'collapse',
      icon: icons.IconKey,
      children: [
        {
          id: 'charge-points',
          title: 'Charge Points',
          type: 'item',
          url: '/charge-points',
          target: false,
        },
      ],
    },
  ],
};

export default pages;
