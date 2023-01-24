import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Box, Switch, TableCell, Typography } from '@mui/material';
import { TableItems } from 'ui-component/extended/TableItems';
import { Chip } from 'ui-component/Chip';

import { Helpers } from 'helpers';
import * as S from './ChargePointsTable.styles';

export const ChargePointsTable = ({ chargePoints }) => {
  const stateVariant = {
    connected: 'success',
    paused: 'warning',
    disconnected: 'error',
  };

  const renderTableHeader = () => {
    const columnNames = {
      point: <TableCell>Charge point</TableCell>,
      chargingSites: <TableCell>Charging sites</TableCell>,
      accessibility: <TableCell>Accessibility</TableCell>,
      state: <TableCell>State</TableCell>,
      pointState: <TableCell>Charge point state</TableCell>,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <React.Fragment key={k}>{v}</React.Fragment>
    ));
  };

  const renderTableBody = (chargePoint) => {
    const columnNames = {
      point: (
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Avatar />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <S.ElementName
              to={Helpers.route('/charge-points/:id', chargePoint.id)}
            >
              {chargePoint.name}
            </S.ElementName>
            <Typography variant="caption">{chargePoint.code}</Typography>
          </Box>
        </Box>
      ),
      chargingSites: chargePoint.site,
      accessibility: chargePoint.accessibility,
      state: (
        <Chip
          variant={stateVariant[chargePoint.state]}
          text={chargePoint.state}
        />
      ),
      pointState: (
        <Switch checked={chargePoint.pointState === 'active'} size="small" />
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
      items={chargePoints}
    />
  );
};

ChargePointsTable.propTypes = {
  chargePoints: PropTypes.object,
};
