import React from 'react';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { CompareArrows, TextSnippet, TrendingUp } from '@mui/icons-material';
import MainCard from 'ui-component/cards/MainCard';
import { Box, Button, TextField } from '@mui/material';
import { TeamWalletInvoicesTable } from './TeamWalletInvoicesTable';
import { TeamWalletChargeKeysTable } from './TeamWalletChargeKeysTable';
import { DetailPageMenu } from 'ui-component/cards/DetailPageMenu';
import { TeamWalletTransactionsTable } from './TeamWalletTransactionsTable';
import { useTheme } from '@mui/styles';

export const TeamWalletTab = () => {
  const theme = useTheme();
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
        <MainCard
          sx={{ width: '100%', marginTop: '16px' }}
          contentSX={{ padding: 0 }}
          title={
            <ItemCardInfo
              bgColor={theme.palette.success.light}
              color={theme.palette.success.main}
              title="Invoices"
              img={<TrendingUp />}
            />
          }
        >
          <TeamWalletTransactionsTable transactions={[]} />
        </MainCard>
        <MainCard
          sx={{ width: '100%', marginTop: '16px' }}
          contentSX={{ padding: 0 }}
          title={<ItemCardInfo title="Invoices" img={<TextSnippet />} />}
          secondary={
            <Button
              disableElevation
              variant="contained"
              size="large"
              sx={{ color: 'white' }}
            >
              Enable invoicing
            </Button>
          }
        >
          <TeamWalletInvoicesTable invoices={[]} />
        </MainCard>
        <MainCard
          sx={{ width: '100%', marginTop: '16px' }}
          contentSX={{ padding: 0 }}
          title={
            <ItemCardInfo
              title="Charge keys"
              value="Last updated: -"
              img={<TextSnippet />}
            />
          }
          secondary={
            <Button
              disableElevation
              variant="contained"
              size="large"
              sx={{ color: 'white' }}
            >
              Pair change key
            </Button>
          }
        >
          <TeamWalletChargeKeysTable chargeKeys={[]} />
        </MainCard>
      </Box>
      <DetailPageMenu menuItems={menuItems} />
    </Box>
  );
};
