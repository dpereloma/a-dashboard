import React, { FC } from 'react';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { MainCard } from 'ui-component/cards/MainCard';
import { TransactionsTable } from './TransactionsTable';
import { MenuItemsIds } from '../ChargePointsDetail.types';
import { TransactionsProps } from './Transactions.types';
import { useTransactionsSearchQuery } from '../../../../../features/transactions/queries';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Receipt } from '@mui/icons-material';

export const Transactions: FC<TransactionsProps> = ({ deviceId }) => {
  const {
    data: transactions,
    error,
    isLoading,
  } = useTransactionsSearchQuery({ deviceId: 'bfgyrwobo78kjcmo6zq75atura' });

  if (isLoading) {
    return (
      <Box p={2} display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (!!error) {
    return <Typography variant="body2">err</Typography>;
  }

  return (
    <MainCard
      id={MenuItemsIds.TRANSACTIONS}
      title={<ItemCardInfo img={<Receipt />} title="Transactions" />}
      contentSX={{ padding: 0 }}
    >
      <TransactionsTable transactions={transactions} />
    </MainCard>
  );
};
