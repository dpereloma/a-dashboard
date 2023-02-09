import React from 'react';
import { Typography } from '@mui/material';
import * as S from './SettingListInfo.styles';

export const SettingListInfo = () => {
  const listItems = [
    {
      label: 'Charge point',
      value: '233213',
    },
    {
      label: 'Identifier',
      value: '#233213 | eeadfdd',
    },
    {
      label: 'Brand & Model',
      value: 'ABB - Basic',
    },
    {
      label: 'Location',
      value: 'Russia',
    },
    {
      label: 'Created at',
      value: 'Nov 12 2022',
    },
    {
      label: 'Updated at',
      value: 'Nov 14 2022',
    },
    {
      label: 'Active at',
      value: 'Nov 12 2022',
    },
  ];

  return (
    <S.InfoListWrapper>
      <Typography variant="subtitle1">Charge point information</Typography>
      <Typography variant="body1">
        Here you can find details about the charge point
      </Typography>
      <ul>
        {listItems.map(({ value, label }) => (
          <li key={label}>
            <Typography variant="body1">{label}</Typography>
            <Typography variant="subtitle1">{value}</Typography>
          </li>
        ))}
      </ul>
    </S.InfoListWrapper>
  );
};
