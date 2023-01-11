import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Box, TableCell, Typography } from '@mui/material';
import { TableItems } from 'ui-component/extended/TableItems';
import { Chip } from 'ui-component/Chip';

export const MembersTable = ({ members }) => {
  const stateVariant = {
    accepted: 'success',
    cancelled: 'error',
  };

  const renderTableHeader = () => {
    const columnNames = {
      member: <TableCell>{`${members.length} members`}</TableCell>,
      userRole: <TableCell>User role</TableCell>,
      priceGroup: <TableCell>Price group</TableCell>,
      access: <TableCell>Access to charge points</TableCell>,
      state: <TableCell>State</TableCell>,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <React.Fragment key={k}>{v}</React.Fragment>
    ));
  };

  const renderTableBody = (member) => {
    const columnNames = {
      point: (
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Avatar />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="subtitle1">{member.name}</Typography>
            <Typography variant="caption">{member.code}</Typography>
          </Box>
        </Box>
      ),
      userRole: member.userRole,
      priceGroup: member.priceGroup,
      access: member.connection,
      state: <Chip variant={stateVariant[member.state]} text={member.state} />,
    };

    return Object.entries(columnNames)?.map(([k, v]) => (
      <TableCell key={k}>{v}</TableCell>
    ));
  };
  return (
    <TableItems
      renderTableHeader={renderTableHeader}
      renderTableBody={renderTableBody}
      items={members}
      emptyItemsMessage="No members"
    />
  );
};

MembersTable.propTypes = {
  members: PropTypes.object,
};
