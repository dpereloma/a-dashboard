import React from 'react';

import { Box, Switch, TextField, Typography } from '@mui/material';

import * as S from './CreateEnableInvoiceForm.styles';

export const CreateEnableInvoiceForm = ({ values, handleChange }) => {
  const renderTextField = (name, label) => (
    <TextField
      size="small"
      fullWidth
      name={name}
      value={values[name]}
      label={label}
      onChange={handleChange}
      type="text"
    />
  );

  const renderSwitch = (name, label) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography>{label}</Typography>
      <Switch
        checked={values[name]}
        name={name}
        size="small"
        onChange={handleChange}
      />
    </Box>
  );

  const createTeamFormFields = [
    {
      name: 'name',
      component: renderTextField('name', 'Company name'),
    },
    {
      name: 'vat',
      component: renderTextField('vat', 'Vat number'),
    },
    {
      name: 'email',
      component: renderTextField('email', 'Finance email'),
    },
    {
      name: 'address',
      component: renderTextField('address', 'Company Address'),
    },
    {
      name: 'autoBalance',
      component: renderSwitch('autoBalance', 'Automatic balance payout'),
    },
  ];

  return createTeamFormFields.map(({ name, component }) => (
    <S.FormItem key={name}>
      <S.Label>{name}</S.Label>
      {component}
    </S.FormItem>
  ));
};
