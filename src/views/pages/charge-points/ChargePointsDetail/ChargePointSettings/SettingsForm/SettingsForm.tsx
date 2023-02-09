import React from 'react';
import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { SettingsValues } from '../ChargePointSettings.types';
import * as S from './SettingForm.styles';

export const SettingsForm = () => {
  const { values, handleBlur, handleChange } =
    useFormikContext<SettingsValues>();

  const chargeTypeItems = [
    {
      value: 'ac',
      label: 'AC',
    },
    {
      value: 'dc',
      label: 'DC',
    },
  ];

  const connectorItems = [
    {
      value: 'type1',
      label: 'Type1',
    },
    {
      value: 'type2',
      label: 'Type2',
    },
  ];

  const chargingSites = [
    {
      value: 'type1',
      label: 'Type1',
    },
    {
      value: 'type2',
      label: 'Type2',
    },
  ];

  const renderTextField = (name: keyof SettingsValues) => (
    <TextField
      name={name}
      size="small"
      fullWidth
      type="text"
      value={values[name]}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );

  const renderSelect = (name: keyof SettingsValues, options: any) => (
    <Select
      name={name}
      fullWidth
      size="small"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[name]}
    >
      {options.map((option: any) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );

  const formItems = [
    {
      label: 'Name',
      input: renderTextField('name'),
    },
    {
      label: 'Charging sites',
      input: renderSelect('chargingSite', chargingSites),
    },
    {
      label: 'Location',
      input: renderTextField('location'),
    },
    {
      label: 'Charging type (AC/DC)',
      input: renderSelect('chargingType', chargeTypeItems),
    },
    {
      label: 'Connector',
      input: renderSelect('connector', connectorItems),
    },
    {
      label: 'Max KW',
      input: renderTextField('maxKW'),
    },
  ];

  return (
    <S.FormWrapper>
      {formItems.map(({ label, input }) => (
        <Box key={label}>
          <Typography>{label}</Typography>
          {input}
        </Box>
      ))}
    </S.FormWrapper>
  );
};
