import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Box, TableCell, Typography } from '@mui/material';
import { TableItems } from 'ui-component/extended/TableItems';
import { Chip } from 'ui-component/Chip';

import { Helpers } from 'helpers';
import * as S from './ChargePointsTable.styles';

export const ChargePointsTable = ({ chargePoints }) => {
    const pointStateVariant = {
        active: 'success',
        inactive: 'error',
    };

    const stateVariant = {
        connected: 'success',
        paused: 'warning',
        disconnected: 'error',
    };

    const renderTableHeader = () => {
        const columnNames = {
            point: <TableCell>Charge point</TableCell>,
            chargingSites: <TableCell>Charging sites</TableCell>,
            pointState: <TableCell>Charge point state</TableCell>,
            connections: <TableCell>Connection</TableCell>,
            accessibility: <TableCell>Accessibility</TableCell>,
            state: <TableCell>State</TableCell>,
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
                            to={Helpers.route(
                                '/charge-points/:id',
                                chargePoint.id,
                            )}
                        >
                            {chargePoint.name}
                        </S.ElementName>
                        <Typography variant="caption">
                            {chargePoint.code}
                        </Typography>
                    </Box>
                </Box>
            ),
            chargingSites: chargePoint.site,
            pointState: (
                <Chip
                    variant={pointStateVariant[chargePoint.pointState]}
                    text={chargePoint.pointState}
                />
            ),
            connections: chargePoint.connection,
            accessibility: chargePoint.accessibility,
            state: (
                <Chip
                    variant={stateVariant[chargePoint.state]}
                    text={chargePoint.state}
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
            items={chargePoints}
        />
    );
};

ChargePointsTable.propTypes = {
    chargePoints: PropTypes.object,
};
