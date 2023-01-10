import React from 'react';

import { MenuItem, Select, TextField } from '@mui/material';

import * as S from './CreateMemberForm.styles';
import {
  accessToChargePoints,
  priceGroups,
  states,
  userRoles,
} from '../../MembersTab.utils';

export const CreateMemberForm = ({ values, handleChange }) => {
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

  const createMemberFormFields = [
    {
      name: 'name',
      component: renderTextField('name'),
    },
    {
      name: 'code',
      component: renderTextField('code'),
    },
    {
      name: 'pointState',
      component: renderSelect('userRole', userRoles),
    },
    {
      name: 'connection',
      component: renderSelect('priceGroup', priceGroups),
    },
    {
      name: 'accessibility',
      component: renderSelect('accessToChargePoints', accessToChargePoints),
    },
    {
      name: 'state',
      component: renderSelect('state', states),
    },
  ];

  return createMemberFormFields.map(({ name, component }) => (
    <S.FormItem key={name}>
      <S.Label>{name}</S.Label>
      {component}
    </S.FormItem>
  ));
};
