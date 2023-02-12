import React from 'react';
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { styled } from '@mui/styles';
import { DropdownMenu } from './DropdownMenu';
import { MoreVertOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { ChargePointsFilter } from '../../views/pages/charge-points/ChargePoints/ChargePointsFilter';

const HeadRow = styled(TableHead)(() => ({
  '& th': {
    fontSize: '0.875rem',
    color: 'rgb(33, 33, 33)',
    fontWeight: 500,
    padding: '16px',
  },
}));

const BodyRows = styled(TableBody)(() => ({
  '& td': {
    fontSize: '0.875rem',
    padding: '16px',
  },
}));

export const TableItems = ({
  renderTableHeader,
  renderTableBody,
  items,
  renderAction,
  key = 'id',
  handleSelect,
  emptyItemsMessage,
}) => {
  const hasActions = !!renderAction;

  return (
    <Box width="100%" overflow="auto">
      <Table size="small" onClick={handleSelect}>
        <HeadRow>
          <TableRow>
            {renderTableHeader()}
            {hasActions ? <TableCell align="right">Actions</TableCell> : null}
          </TableRow>
        </HeadRow>
        <BodyRows>
          {items?.map((item) => (
            <TableRow style={{ whiteSpace: 'pre-wrap' }} key={item[key]}>
              {renderTableBody(item)}
              {hasActions ? (
                <TableCell align="right">
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconButton size="small">
                      <DropdownMenu
                        icon={MoreVertOutlined}
                        renderContent={() => renderAction?.(item)}
                      />
                    </IconButton>
                  </Box>
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </BodyRows>
      </Table>
      {items?.length === 0 || !items ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '24px',
          }}
        >
          <Typography variant="h4">{emptyItemsMessage}</Typography>
        </Box>
      ) : null}
    </Box>
  );
};

TableItems.propTypes = {
  renderTableHeader: PropTypes.node,
  renderTableBody: PropTypes.node,
  items: PropTypes.object,
  renderAction: PropTypes.node,
  key: PropTypes.string,
  handleSelect: PropTypes.func,
  emptyItemsMessage: PropTypes.string,
};
