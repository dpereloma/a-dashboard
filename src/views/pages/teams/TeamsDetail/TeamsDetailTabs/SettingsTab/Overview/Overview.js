import React from 'react';

import { Box } from '@mui/material';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import MainCard from 'ui-component/cards/MainCard';

import { TrendingUp } from '@mui/icons-material';

export const Overview = () => {
  const basicInfoItems = [
    {
      title: 'Invoices',
      value: 'Plan',
      img: <TrendingUp />,
    },
    {
      title: 'US$0.00',
      value: 'Price/Charge Point',
    },
    {
      title: '0 Total',
      value: 'Charge Points',
    },
    {
      title: '-',
      value: 'Next payment',
    },
    {
      title: '10%',
      value: 'Transaction fee',
    },
    {
      title: 'US$0.00/kWh',
      value: 'Transaction fee',
    },
    {
      title: '10%',
      value: 'Transaction fee roaming',
    },
    {
      title: 'Monthly',
      value: 'Invoice period',
    },
  ];

  return (
    <MainCard
      sx={{ width: '100%', marginTop: '16px' }}
      content={false}
      title={
        <Box sx={{ display: 'flex', gap: '70px', flexWrap: 'wrap' }}>
          {basicInfoItems.map(({ title, value, img }) => (
            <ItemCardInfo
              key={title + value}
              title={title}
              titleVariant="subtitle1"
              value={value}
              valueVariant="caption"
              img={img ?? undefined}
            />
          ))}
        </Box>
      }
    />
  );
};
