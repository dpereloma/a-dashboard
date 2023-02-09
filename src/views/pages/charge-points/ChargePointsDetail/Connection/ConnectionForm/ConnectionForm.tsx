import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import * as S from './ConnectionForm.styles';
import { ConnectionValues } from '../Connection.types';

export const ConnectionForm = () => {
  const { values, handleBlur, handleChange } =
    useFormikContext<ConnectionValues>();

  const renderTextField = (name: keyof ConnectionValues) => (
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

  const formItems = [
    {
      label: 'Integration ID',
      input: renderTextField('integrationId'),
    },
    {
      label: 'Serial number',
      input: renderTextField('serialNumber'),
    },
    {
      label: 'Connector ID',
      input: renderTextField('connectionId'),
    },
    {
      label: 'OCPP',
      input: renderTextField('ocpp'),
    },
    {
      label: 'Firmware version',
      input: renderTextField('firmwareVersion'),
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
