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
      point: <TableCell align="center">Charge point</TableCell>,
      chargingSites: <TableCell align="center">Charging sites</TableCell>,
      accessibility: <TableCell align="center">Accessibility</TableCell>,
      state: <TableCell align="center">State</TableCell>,
      pointState: <TableCell align="right">Charge point state</TableCell>,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <React.Fragment key={k}>{v}</React.Fragment>
    ));
  };

  const renderTableBody = (chargePoint) => {
    const columnNames = {
      point: (
        <Box sx={{ display: 'flex', gap: '16px' }}>
          {/*<Avatar />*/}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <S.ElementName
              to={Helpers.route('/charge-points/:id', chargePoint.id)}
            >
              {chargePoint?.device?.chargePointModel}
            </S.ElementName>
            <Typography variant="caption">
              {chargePoint?.device?.chargePointSerialNumber}
            </Typography>
          </Box>
        </Box>
      ),
      chargingSites: chargePoint.site ?? '-',
      accessibility: chargePoint.accessibility ?? '-',
      state: chargePoint.state ?? '-',
      // state: (
      //   <Chip
      //     variant={stateVariant[chargePoint.state]}
      //     text={chargePoint.state}
      //   />
      // ),
      pointState: (
        <Switch checked={chargePoint.status === 'active'} size="small" />
      ),
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
      items={chargePoints}
      emptyItemsMessage="No charge points"
    />
  );
};

ChargePointsTable.propTypes = {
  chargePoints: PropTypes.object,
};
