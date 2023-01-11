import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Box, TableCell, Typography } from '@mui/material';
import { TableItems } from 'ui-component/extended/TableItems';

export const TeamWalletInvoicesTable = ({ invoices }) => {
  const renderTableHeader = () => {
    const columnNames = {
      item: <TableCell>{`${invoices.length} invoices`}</TableCell>,
      amount: <TableCell>Amount</TableCell>,
      state: <TableCell>State</TableCell>,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <React.Fragment key={k}>{v}</React.Fragment>
    ));
  };

  const renderTableBody = (invoice) => {
    const columnNames = {
      item: (
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Avatar />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="subtitle1">{invoice.name}</Typography>
            <Typography variant="caption">{invoice.code}</Typography>
          </Box>
        </Box>
      ),
      amount: invoice.amount,
      state: invoice.state,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <TableCell key={k}>{v}</TableCell>
    ));
  };
  return (
    <TableItems
      renderTableHeader={renderTableHeader}
      renderTableBody={renderTableBody}
      items={invoices}
      emptyItemsMessage="No invoices"
    />
  );
};

TeamWalletInvoicesTable.propTypes = {
  invoices: PropTypes.object,
};
