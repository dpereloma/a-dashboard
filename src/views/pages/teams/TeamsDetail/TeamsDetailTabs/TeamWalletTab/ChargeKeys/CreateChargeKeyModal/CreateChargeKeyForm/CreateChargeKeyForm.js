import React from 'react';

import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';

import * as S from './CreateChargeKeyForm.styles';
import { useTheme } from '@mui/styles';

export const CreateChargeKeyForm = ({ values, handleChange }) => {
  const theme = useTheme();
  const ownershipOptions = [
    {
      label: 'Owner1',
      value: 'owner1',
    },
    {
      label: 'Owner2',
      value: 'owner2',
    },
  ];

  const vehicleOptions = [
    {
      label: 'Vehicle1',
      value: 'vehicle1',
    },
    {
      label: 'Vehicle2',
      value: 'vehicle2',
    },
  ];

  const profileOptions = [
    {
      label: 'Profile1',
      value: 'profile1',
    },
    {
      label: 'Profile2',
      value: 'profile2',
    },
  ];

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

  const createTeamFormFields = [
    {
      name: 'Ownership',
      component: renderSelect('ownership', ownershipOptions),
    },
    {
      name: 'Vehicle',
      component: renderSelect('vehicle', vehicleOptions),
    },
    {
      name: 'Charge profile',
      component: renderSelect('chargeProfile', profileOptions),
    },
    {
      name: 'Name',
      component: renderTextField('name'),
    },
  ];

  return (
    <Box sx={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Box
        sx={{
          width: '47%',
          background: theme.palette.grey[200],
          border: `1px solid ${theme.palette.grey[500]}`,
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        <Typography variant="h1">Charge key</Typography>
        <Typography sx={{ textAlign: 'center' }} variant="subtitle1">
          ID:
        </Typography>
        <TextField
          size="small"
          fullWidth
          name="id"
          value={values.id}
          onChange={handleChange}
          type="text"
        />
      </Box>
      <Box sx={{ width: '47%' }}>
        {createTeamFormFields.map(({ name, component }) => (
          <S.FormItem key={name}>
            <S.Label>{name}</S.Label>
            {component}
          </S.FormItem>
        ))}
      </Box>
    </Box>
  );
};
