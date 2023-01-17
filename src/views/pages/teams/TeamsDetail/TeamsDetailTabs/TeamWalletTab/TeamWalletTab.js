import React from 'react';

import { CompareArrows, TextSnippet } from '@mui/icons-material';
import { Box } from '@mui/material';
import { DetailPageMenu } from 'ui-component/cards/DetailPageMenu';
import { Transactions } from './Transactions';
import { Invoices } from './Invoices';
import { ChargeKeys } from './ChargeKeys';

export const TeamWalletTab = () => {
  const [value, setValue] = React.useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const menuItems = [
    {
      icon: <CompareArrows />,
      text: 'Transactions',
    },
    {
      icon: <TextSnippet />,
      text: 'Invoices',
    },
    {
      icon: <TextSnippet />,
      text: 'Charge keys',
    },
  ];

  return (
    <Box sx={{ display: 'flex', gap: '16px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Transactions />
        <Invoices />
        <ChargeKeys />
      </Box>
      <DetailPageMenu menuItems={menuItems} />
    </Box>
  );
};
