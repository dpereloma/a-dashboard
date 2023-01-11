import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Box, TableCell, Typography } from '@mui/material';
import { TableItems } from 'ui-component/extended/TableItems';

export const TeamWalletChargeKeysTable = ({ chargeKeys }) => {
  const renderTableHeader = () => {
    const columnNames = {
      item: <TableCell>{`${chargeKeys.length} charge keys`}</TableCell>,
      owner: <TableCell>Owner</TableCell>,
      lastUpdatedAt: <TableCell>Last updated at</TableCell>,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <React.Fragment key={k}>{v}</React.Fragment>
    ));
  };

  const renderTableBody = (chargeKey) => {
    const columnNames = {
      item: (
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Avatar />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="subtitle1">{chargeKey.name}</Typography>
            <Typography variant="caption">{chargeKey.code}</Typography>
          </Box>
        </Box>
      ),
      owner: chargeKey.owner,
      lastUpdatedAt: chargeKey.lastUpdatedAt,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <TableCell key={k}>{v}</TableCell>
    ));
  };
  return (
    <TableItems
      renderTableHeader={renderTableHeader}
      renderTableBody={renderTableBody}
      items={chargeKeys}
      emptyItemsMessage="No charge keys"
    />
  );
};

TeamWalletChargeKeysTable.propTypes = {
  chargeKeys: PropTypes.object,
};
