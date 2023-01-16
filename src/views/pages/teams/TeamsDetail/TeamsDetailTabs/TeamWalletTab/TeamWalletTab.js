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
import { CreateEnableInvoice } from './CreateEnableInvoice';
import { CreateChargeKeyModal } from './CreateChargeKeyModal';

export const TeamWalletTab = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(null);
  const [openEnableInvoice, setOpenEnableInvoice] = React.useState(false);
  const [invoices, setInvoices] = React.useState([]);
  const [openPairChargeKey, setOpenPairChargeKey] = React.useState(false);
  const [chargeKeys, setChargeKeys] = React.useState([]);

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
              title="Transactions"
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
              onClick={() => setOpenEnableInvoice(true)}
              sx={{ color: 'white' }}
            >
              Enable invoicing
            </Button>
          }
        >
          <TeamWalletInvoicesTable invoices={invoices} />
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
              onClick={() => setOpenPairChargeKey(true)}
              sx={{ color: 'white' }}
            >
              Pair change key
            </Button>
          }
        >
          <TeamWalletChargeKeysTable chargeKeys={chargeKeys} />
        </MainCard>
      </Box>
      <DetailPageMenu menuItems={menuItems} />
      <CreateEnableInvoice
        isOpen={openEnableInvoice}
        onClose={() => setOpenEnableInvoice(false)}
        setInvoices={setInvoices}
      />
      <CreateChargeKeyModal
        isOpen={openPairChargeKey}
        onClose={() => setOpenPairChargeKey(false)}
        setChargeKeys={setChargeKeys}
      />
    </Box>
  );
};
