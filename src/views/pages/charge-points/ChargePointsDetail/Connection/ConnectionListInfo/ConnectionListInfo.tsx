import React from 'react';
import { Typography } from '@mui/material';
import * as S from './ConnectionListInfo.styles';

export const ConnectionListInfo = () => {
  const listItems = [
    {
      label: 'Created at',
      value: 'Nov 17 2022, 15:33',
    },
    {
      label: 'Last connected',
      value: 'Nov 17 2022, 15:33',
    },
    {
      label: 'Updated',
      value: 'Nov 17 2022, 15:33',
    },
    {
      label: 'Status',
      value: 'disconnected',
    },
    {
      label: 'Status',
      value: 'Unavailable',
    },
    {
      label: 'Connector available',
      value: 'No',
    },
    {
      label: 'MID',
      value: 'No',
    },
    {
      label: 'Cell strength',
      value: '-',
    },
    {
      label: 'Wi-fi strength',
      value: '-',
    },
    {
      label: 'Cable lock',
      value: 'No',
    },
    {
      label: 'Free charging mode',
      value: 'No',
    },
    {
      label: 'MID',
      value: 'No',
    },
  ];

  return (
    <S.InfoListWrapper>
      <Typography variant="subtitle1">Your charge point connection</Typography>
      <Typography variant="body1">
        Here you can find details about the charge point connection, and delete
        or add a new connection
      </Typography>
      <ul>
        {listItems.map(({ value, label }) => (
          <li key={label}>
            <Typography variant="body1">{label}</Typography>
            <Typography variant="subtitle1">{value}</Typography>
          </li>
        ))}
        <li>View logs</li>
        <li>View logs charge keys</li>
      </ul>
    </S.InfoListWrapper>
  );
};
