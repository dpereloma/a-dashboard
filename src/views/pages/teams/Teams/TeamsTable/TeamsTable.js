import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Avatar, Box, MenuItem, TableCell, Typography } from '@mui/material';
import { TableItems } from 'ui-component/extended/TableItems';

import { teamsActions } from 'store/teamsSlice';

export const TeamsTable = ({ teams }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const renderTableHeader = () => {
        const columnNames = {
            name: <TableCell>Team name</TableCell>,
            plan: <TableCell>Plan</TableCell>,
            members: <TableCell>Members</TableCell>,
            chargePoints: <TableCell>Charge points</TableCell>,
            wallet: <TableCell>Wallet</TableCell>,
        };

        return Object.entries(columnNames)?.map(([k, v]) => (
            <React.Fragment key={k}>{v}</React.Fragment>
        ));
    };

    const renderTableBody = (team) => {
        const columnNames = {
            name: (
                <Box sx={{ display: 'flex', gap: '16px' }}>
                    <Avatar />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="body1">{team.name}</Typography>
                        <Typography variant="caption">{team.code}</Typography>
                    </Box>
                </Box>
            ),
            plan: team.plan,
            members: `${team.members} members`,
            chargePoints: `${team.chargePoints} charge points`,
            wallet: `$${team.wallet}`,
        };

        return Object.entries(columnNames)?.map(([k, v]) => (
            <TableCell key={k}>{v}</TableCell>
        ));
    };

    const renderAction = (team) => (
        <>
            <MenuItem onClick={() => navigate(`/teams/${team.id}`)}>
                Go to team
            </MenuItem>
            <MenuItem
                onClick={() => dispatch(teamsActions.removeTeam(team.id))}
            >
                Delete team
            </MenuItem>
        </>
    );
    return (
        <TableItems
            renderTableHeader={renderTableHeader}
            renderTableBody={renderTableBody}
            renderAction={renderAction}
            items={teams}
        />
    );
};

TeamsTable.propTypes = {
    teams: PropTypes.object,
};
