import React from 'react';
import { useTheme } from '@mui/styles';

import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import MainCard from 'ui-component/cards/MainCard';
import { TeamWalletTransactionsTable } from './TeamWalletTransactionsTable';

import { TrendingUp } from '@mui/icons-material';

export const Transactions = () => {
  const theme = useTheme();

  return (
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
  );
};
