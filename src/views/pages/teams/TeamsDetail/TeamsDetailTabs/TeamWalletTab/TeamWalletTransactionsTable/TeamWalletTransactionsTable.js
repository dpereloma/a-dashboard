import React from 'react';
import PropTypes from 'prop-types';

import { TableCell } from '@mui/material';
import { TableItems } from 'ui-component/extended/TableItems';

export const TeamWalletTransactionsTable = ({ transactions }) => {
  const renderTableHeader = () => {
    const columnNames = {
      type: <TableCell>Type</TableCell>,
      summary: <TableCell>Summary</TableCell>,
      vat: <TableCell>Vat</TableCell>,
      subAmount: <TableCell>Sub amount</TableCell>,
      amount: <TableCell>Amount</TableCell>,
      state: <TableCell>State</TableCell>,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <React.Fragment key={k}>{v}</React.Fragment>
    ));
  };

  const renderTableBody = (transaction) => {
    const columnNames = {
      type: transaction.type,
      summary: transaction.summary,
      vat: transaction.vat,
      subAmount: transaction.subAmount,
      amount: transaction.amount,
      state: transaction.state,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <TableCell key={k}>{v}</TableCell>
    ));
  };
  return (
    <TableItems
      renderTableHeader={renderTableHeader}
      renderTableBody={renderTableBody}
      items={transactions}
      emptyItemsMessage="No transactions"
    />
  );
};

TeamWalletTransactionsTable.propTypes = {
  transactions: PropTypes.object,
};
