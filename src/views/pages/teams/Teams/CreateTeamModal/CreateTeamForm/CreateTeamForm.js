import React from 'react';

import { TextField } from '@mui/material';

import * as S from './CreateTeamForm.styles';

export const CreateTeamForm = ({ values, handleChange }) => {
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

    const createTeamFormFields = [
        {
            name: 'name',
            component: renderTextField('name'),
        },
        {
            name: 'plan',
            component: renderTextField('plan'),
        },
        {
            name: 'members',
            component: renderTextField('members'),
        },
        {
            name: 'chargePoints',
            component: renderTextField('chargePoints'),
        },
        {
            name: 'wallet',
            component: renderTextField('wallet'),
        },
    ];

    return createTeamFormFields.map(({ name, component }) => (
        <S.FormItem key={name}>
            <S.Label>{name}</S.Label>
            {component}
        </S.FormItem>
    ));
};
