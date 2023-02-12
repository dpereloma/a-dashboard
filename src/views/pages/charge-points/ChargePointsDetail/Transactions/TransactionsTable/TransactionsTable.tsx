import React, { FC } from 'react';

import { Box, MenuItem, TableCell, Typography } from '@mui/material';
import { TableItems } from 'ui-component/extended/TableItems';
import { TransactionsTableProps } from './TransactionsTable.types';
import { ResTransaction } from '../../../../../../features/transactions/types/responses';
import { format } from 'date-fns';
import { HighlightOff, KeyboardTab, Settings } from '@mui/icons-material';
import { teamsActions } from '../../../../../../store/teamsSlice';
import { Transaction } from '../../../../../../features/transactions/types/Transaction';
import { useNavigate } from 'react-router-dom';

export const TransactionsTable: FC<TransactionsTableProps> = ({
  transactions,
}) => {
  const navigate = useNavigate();
  console.log(transactions);
  const renderTableHeader = () => {
    const columnNames = {
      tag: <TableCell align="center">Tag</TableCell>,
      energyW: <TableCell align="center">Energy</TableCell>,
      startedAt: <TableCell align="center">Started at</TableCell>,
      stoppedAt: <TableCell align="center">Stopped at</TableCell>,
      status: <TableCell align="right">Status</TableCell>,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <React.Fragment key={k}>{v}</React.Fragment>
    ));
  };

  const renderTableBody = (transaction?: Transaction) => {
    const columnNames = {
      tag: transaction?.tag,
      energyW: transaction?.energyW ?? '-',
      startedAt: transaction?.startAt
        ? format(new Date(transaction.startAt), 'dd.MM.yyyy HH:mm')
        : '-',
      stoppedAt: transaction?.stopAt
        ? format(new Date(transaction.stopAt), 'dd.MM.yyyy HH:mm')
        : '-',
      status: transaction?.authStatus ?? '-',
    };

    return Object.entries(columnNames)?.map(([k, v], i, arr) => (
      <TableCell align={i === arr.length - 1 ? 'right' : 'center'} key={k}>
        {v}
      </TableCell>
    ));
  };

  const renderAction = (transaction: Transaction) => (
    <>
      <MenuItem
        onClick={() => navigate(`/transactions/${transaction.id}/details`)}
      >
        <KeyboardTab fontSize="small" sx={{ marginRight: '8px' }} />
        Go to transaction
      </MenuItem>
    </>
  );

  return (
    <TableItems
      renderTableHeader={renderTableHeader}
      renderTableBody={renderTableBody}
      renderAction={renderAction}
      items={transactions}
      emptyItemsMessage="No transactions"
    />
  );
};
