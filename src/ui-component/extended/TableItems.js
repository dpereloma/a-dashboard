import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/styles';

const HeadRow = styled(TableHead)(() => ({
    '& th': {
        fontSize: '0.875rem',
        color: 'rgb(33, 33, 33)',
        fontWeight: 500,
        padding: '16px'
    }
}));

const BodyRows = styled(TableBody)(() => ({
    '& td': {
        fontSize: '0.875rem',
        padding: '16px'
    }
}));

export const TableItems = ({ renderTableHeader, renderTableBody, items, renderAction, key = 'id', handleSelect }) => {
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
                            {hasActions ? <TableCell align="right">{renderAction?.(item)}</TableCell> : null}
                        </TableRow>
                    ))}
                </BodyRows>
            </Table>
        </Box>
    );
};
