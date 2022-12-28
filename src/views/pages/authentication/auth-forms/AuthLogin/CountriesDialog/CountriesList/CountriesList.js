import React from 'react';
import { styled } from '@mui/material';

import { List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';

import { CheckRounded } from '@mui/icons-material';

const ItemButton = styled(ListItemButton)({
    padding: '10px 4px',
    borderRadius: 12
});

const ItemIcon = styled(ListItemIcon)(({ selected, theme }) => ({
    minWidth: 46,
    color: selected ? 'red' : 'inherit'
}));

const ItemText = styled(ListItemText)(({ selected, theme }) => ({
    color: selected ? 'red' : 'inherit'
}));

/**
 * Check is two country equal by ID
 *
 * @param a - Country A
 * @param b - Country B
 */
const isSame = (a, b) => a?.code === b?.code;

/**
 * Countries list
 *
 * @param props - Component props
 */
export function CountriesList({ selected, countries, onSelect }) {
    return (
        <List>
            {countries.map((country, idx) => (
                <ItemButton key={country.code} onClick={onSelect ? () => onSelect(country, idx) : undefined}>
                    <ItemIcon>
                        <img src={country.img} alt={country.nameCode} width={28} height={20} />
                    </ItemIcon>
                    <ItemText selected={isSame(country, selected)}>{`${country.nameCode} (${country.phoneCode})`}</ItemText>
                    {isSame(country, selected) && (
                        <ItemIcon selected>
                            <CheckRounded />
                        </ItemIcon>
                    )}
                </ItemButton>
            ))}
        </List>
    );
}
