import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Avatar, Box, MenuItem, TableCell, Typography } from '@mui/material';
import { TableItems } from 'ui-component/extended/TableItems';
import { chargingSitesActions } from '../../../../../store/chargingSItesSlice';
import { Chip } from '../../../../../ui-component/Chip';

export const ChargingSitesTable = ({ chargingSites }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stateVariant = {
    available: 'success',
    notAvailable: 'error',
  };

  const renderTableHeader = () => {
    const columnNames = {
      name: <TableCell>{`${chargingSites.length} charging sites`}</TableCell>,
      team: <TableCell>Team</TableCell>,
      smartQueue: <TableCell>SmartQueue</TableCell>,
      loadBalancing: <TableCell>Load balancing</TableCell>,
      state: <TableCell>State</TableCell>,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <React.Fragment key={k}>{v}</React.Fragment>
    ));
  };

  const renderTableBody = (chargingSite) => {
    const columnNames = {
      name: (
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Avatar />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1">{chargingSite.name}</Typography>
            <Typography variant="caption">{chargingSite.address}</Typography>
          </Box>
        </Box>
      ),
      team: chargingSite.team,
      smartQueue: chargingSite.smartQueue,
      loadBalancing: chargingSite.loadBalancing,
      state: (
        <Chip
          variant={stateVariant[chargingSite.state]}
          text={chargingSite.state}
        />
      ),
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <TableCell key={k}>{v}</TableCell>
    ));
  };

  const renderAction = (chargingSite) => (
    <>
      <MenuItem onClick={() => navigate(`/charging-sites/${chargingSite.id}`)}>
        Go to site
      </MenuItem>
      <MenuItem
        onClick={() =>
          dispatch(chargingSitesActions.removeChargingSite(chargingSite.id))
        }
      >
        Delete site
      </MenuItem>
    </>
  );
  return (
    <TableItems
      renderTableHeader={renderTableHeader}
      renderTableBody={renderTableBody}
      renderAction={renderAction}
      items={chargingSites}
    />
  );
};

ChargingSitesTable.propTypes = {
  teams: PropTypes.object,
};
