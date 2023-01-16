import React from 'react';

import { TextField } from '@mui/material';

import * as S from './CreateChargingSiteForm.styles';

export const CreateChargingSiteForm = ({ values, handleChange }) => {
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
      name: 'address',
      component: renderTextField('address'),
    },
    {
      name: 'team',
      component: renderTextField('team'),
    },
    {
      name: 'smartQueue',
      component: renderTextField('smartQueue'),
    },
    {
      name: 'loadBalancing',
      component: renderTextField('loadBalancing'),
    },
  ];

  return createTeamFormFields.map(({ name, component }) => (
    <S.FormItem key={name}>
      <S.Label>{name}</S.Label>
      {component}
    </S.FormItem>
  ));
};
