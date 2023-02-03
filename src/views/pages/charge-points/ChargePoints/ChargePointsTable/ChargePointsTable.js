import React from 'react';
import PropTypes from 'prop-types';

import { Box, Switch, TableCell, Typography } from '@mui/material';
import { TableItems } from 'ui-component/extended/TableItems';

import * as Helpers from 'helpers';
import * as S from './ChargePointsTable.styles';
import { Button } from '../../../../../ui-component/buttons/Button';

export const ChargePointsTable = ({
  chargePoints,
  handleOpenAddChargePoint,
}) => {
  const renderTableHeader = () => {
    const columnNames = {
      point: <TableCell align="center">Charge point</TableCell>,
      vendor: <TableCell align="center">Vendor</TableCell>,
      address: <TableCell align="center">Location</TableCell>,
      device: <TableCell align="center">Device</TableCell>,
      pointState: <TableCell align="right"></TableCell>,
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
              to={Helpers.route('/charge-points/:id/details', chargePoint.id)}
            >
              {chargePoint?.device?.chargePointModel}
            </S.ElementName>
            <Typography variant="caption">
              {chargePoint?.device?.chargePointSerialNumber}
            </Typography>
          </Box>
        </Box>
      ),
      vendor: chargePoint.device?.chargePointVendor ?? '-',
      address: chargePoint?.location?.address ?? '-',
      device: chargePoint.device?.deviceId ?? '-',
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
      emptyItemsMessage={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          No charge points
          <Button text="Add charge point" onClick={handleOpenAddChargePoint} />
        </Box>
      }
    />
  );
};

ChargePointsTable.propTypes = {
  chargePoints: PropTypes.object,
};
