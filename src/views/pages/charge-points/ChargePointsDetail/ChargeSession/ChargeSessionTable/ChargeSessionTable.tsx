import React from 'react';

import { Box, TableCell, Typography } from '@mui/material';
import { TableItems } from 'ui-component/extended/TableItems';

export const ChargeSessionTable = () => {
  const renderTableHeader = () => {
    const columnNames = {
      charge: <TableCell align="center">Charge</TableCell>,
      chargePoint: <TableCell align="center">Charge point</TableCell>,
      user: <TableCell align="center">User</TableCell>,
      price: <TableCell align="center">Price</TableCell>,
      state: <TableCell align="right">State</TableCell>,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <React.Fragment key={k}>{v}</React.Fragment>
    ));
  };

  const renderTableBody = (chargePoint: any) => {
    const columnNames = {
      charge: (
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography>{chargePoint.id}</Typography>
            <Typography variant="caption">
              {chargePoint?.device?.chargePointSerialNumber}
            </Typography>
          </Box>
        </Box>
      ),
      chargePoint: chargePoint.device?.chargePointVendor ?? '-',
      user: chargePoint?.location?.address ?? '-',
      price: chargePoint.device?.deviceId ?? '-',
      state: chargePoint.state ?? '-',
    };

    return Object.entries(columnNames)?.map(([k, v], i, arr) => (
      <TableCell align={i === arr.length - 1 ? 'right' : 'center'} key={k}>
        {v}
      </TableCell>
    ));
  };

  return (
    <TableItems
      renderTableHeader={renderTableHeader}
      renderTableBody={renderTableBody}
      items={[]}
      emptyItemsMessage="No charge session"
    />
  );
};
