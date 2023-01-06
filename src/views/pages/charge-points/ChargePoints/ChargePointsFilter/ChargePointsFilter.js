import React from 'react';
import PropTypes from 'prop-types';

import { Box, MenuItem, Select, Typography } from '@mui/material';

import { pointStates, states } from '../ChargePoints.utils';

export const ChargePointsFilter = ({ handleChange, filterValues }) => {
    const renderSelect = (name, items) => (
        <Select
            fullWidth
            defaultValue="-"
            size="small"
            name={name}
            value={filterValues[name]}
            onChange={handleChange}
            SelectProps={{
                native: true,
            }}
        >
            <MenuItem value="-">-</MenuItem>
            {items.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </Select>
    );
    return (
        <>
            <Box sx={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <Typography sx={{ width: '30%' }}>Point state</Typography>
                {renderSelect('pointState', pointStates)}
            </Box>
            <Box sx={{ display: 'flex', gap: '8px' }}>
                <Typography sx={{ width: '30%' }}>State</Typography>
                {renderSelect('state', states)}
            </Box>
        </>
    );
};

ChargePointsFilter.propTypes = {
    handleChange: PropTypes.func,
    filterValues: PropTypes.object,
};
