import React from 'react';

import { MenuItem, Select, TextField } from '@mui/material';

import {
    accessibilities,
    connections,
    pointStates,
    states,
} from '../../ChargePoints.utils';
import * as S from './CreateChargePointForm.styles';

export const CreateChargePointForm = ({ values, handleChange }) => {
    const renderTextField = (name) => (
        <TextField
            size="small"
            fullWidth
            name={name}
            value={values[name]}
            onChange={handleChange}
            type="text"
        />
    );

    const renderSelect = (name, items) => (
        <Select
            fullWidth
            size="small"
            name={name}
            value={values[name]}
            onChange={handleChange}
            SelectProps={{
                native: true,
            }}
        >
            {items.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </Select>
    );

    const createChargePointFormFields = [
        {
            name: 'name',
            component: renderTextField('name'),
        },
        {
            name: 'code',
            component: renderTextField('code'),
        },
        {
            name: 'site',
            component: renderTextField('site'),
        },
        {
            name: 'pointState',
            component: renderSelect('pointState', pointStates),
        },
        {
            name: 'connection',
            component: renderSelect('connection', connections),
        },
        {
            name: 'accessibility',
            component: renderSelect('accessibility', accessibilities),
        },
        {
            name: 'state',
            component: renderSelect('state', states),
        },
    ];

    return createChargePointFormFields.map(({ name, component }) => (
        <S.FormItem key={name}>
            <S.Label>{name}</S.Label>
            {component}
        </S.FormItem>
    ));
};
