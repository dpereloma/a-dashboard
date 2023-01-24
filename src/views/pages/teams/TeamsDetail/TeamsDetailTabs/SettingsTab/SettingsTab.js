import React from 'react';

import { Box } from '@mui/material';
import { DetailPageMenu } from 'ui-component/cards/DetailPageMenu';
import { Overview } from './Overview';
import { TeamInformation } from './TeamInformation';
import { BankAccounts } from './BankAccounts';
import { Support } from './Support';
import { InstallerSettings } from './InstallerSettings';
import { Subscriptions } from './Subscriptions';
import { OtherSettings } from './OtherSettings';

import { CompareArrows, TextSnippet } from '@mui/icons-material';

export const SettingsTab = ({ team }) => {
  const menuItems = [
    {
      icon: <CompareArrows />,
      text: 'Team information',
    },
    {
      icon: <TextSnippet />,
      text: 'Bank accounts',
    },
    {
      icon: <TextSnippet />,
      text: 'Support',
    },
    {
      icon: <TextSnippet />,
      text: 'Installer settings',
    },
    {
      icon: <TextSnippet />,
      text: 'Subscriptions',
    },
    {
      icon: <TextSnippet />,
      text: 'Other settings',
    },
  ];

  return (
    <Box sx={{ display: 'flex', gap: '16px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Overview />
        <TeamInformation team={team} />
        <BankAccounts />
        <Support />
        <InstallerSettings />
        <Subscriptions />
        <OtherSettings />
      </Box>
      <DetailPageMenu menuItems={menuItems} />
    </Box>
  );
};
