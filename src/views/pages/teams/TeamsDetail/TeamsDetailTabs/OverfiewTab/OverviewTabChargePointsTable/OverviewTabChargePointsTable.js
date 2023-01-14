import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Box, TableCell, Typography } from '@mui/material';
import { TableItems } from 'ui-component/extended/TableItems';
import { Chip } from 'ui-component/Chip';

export const OverviewTabChargePointsTable = ({ chargeSessions }) => {
  const stateVariant = {
    connected: 'success',
    paused: 'warning',
    disconnected: 'error',
  };

  const renderTableHeader = () => {
    const columnNames = {
      charge: <TableCell>Charge</TableCell>,
      chargingPoint: <TableCell>Charging point</TableCell>,
      user: <TableCell>User</TableCell>,
      kwh: <TableCell>Kwh</TableCell>,
      price: <TableCell>Price</TableCell>,
      state: <TableCell>State</TableCell>,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <React.Fragment key={k}>{v}</React.Fragment>
    ));
  };

  const renderTableBody = (chargeSession) => {
    const columnNames = {
      charge: (
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Avatar />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography>{chargeSession.name}</Typography>
            <Typography variant="caption">{chargeSession.code}</Typography>
          </Box>
        </Box>
      ),
      chargingPoint: chargeSession.chargingPoint,
      user: chargeSession.user,
      kwh: chargeSession.kwh,
      price: chargeSession.price,
      state: (
        <Chip
          variant={stateVariant[chargeSession.state]}
          text={chargeSession.state}
        />
      ),
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <TableCell key={k}>{v}</TableCell>
    ));
  };
  return (
    <TableItems
      renderTableHeader={renderTableHeader}
      renderTableBody={renderTableBody}
      items={chargeSessions}
      emptyItemsMessage="No charge sessions"
    />
  );
};

OverviewTabChargePointsTable.propTypes = {
  chargeSessions: PropTypes.object,
};
