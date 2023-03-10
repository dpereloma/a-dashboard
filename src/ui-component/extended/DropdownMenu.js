import React, { useState } from 'react';
import { styled, useTheme } from '@mui/styles';

import { Box, Menu, MenuItem, Typography } from '@mui/material';

const DropdownList = styled(Menu)(() => ({
    '& ul': {
        padding: '8px'
    }
}));

export const DropdownMenu = ({ icon, label, renderFilterList }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedValue, setSelectedValue] = useState('');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setSelectedValue(event.target.textContent);
        setAnchorEl(null);
    };

    const Icon = icon;

    return (
        <Box sx={{ display: 'flex', gap: '8px' }}>
            {label && <Typography>{selectedValue || label}</Typography>}
            <Icon
                fontSize="small"
                sx={{
                    color: theme.palette.grey[600],
                    cursor: 'pointer'
                }}
                aria-controls="menu-popular-card"
                aria-haspopup="true"
                onClick={handleClick}
            />
            <DropdownList
                id="menu-popular-card"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                variant="selectedMenu"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                {renderFilterList ? (
                    renderFilterList()
                ) : (
                    <>
                        <MenuItem onClick={handleClose}> Today</MenuItem>
                        <MenuItem onClick={handleClose}> This Month</MenuItem>
                        <MenuItem onClick={handleClose}> This Year </MenuItem>
                    </>
                )}
            </DropdownList>
        </Box>
    );
};
