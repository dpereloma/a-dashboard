import React from 'react';
import { useTheme } from '@mui/styles';

import { Box, Typography } from '@mui/material';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Chip } from 'ui-component/Chip';
import { MainCard } from 'ui-component/cards/MainCard';

import {
  CheckCircleOutlined,
  Clear,
  HeadsetMic,
  TextSnippet,
} from '@mui/icons-material';

export const Support = () => {
  const theme = useTheme();

  const supportSettingsItems = [
    {
      label: 'Support mail',
      value: <Typography variant="subtitle1">support@monta.com</Typography>,
    },
    {
      label: 'App & Portalchat',
      value: <CheckCircleOutlined sx={{ fill: '#66d123' }} />,
    },
    {
      label: 'Chat',
      value: <Typography variant="subtitle1">Intercom</Typography>,
    },
    {
      label: 'Phone',
      value: <Typography variant="subtitle1">-</Typography>,
    },
    {
      label: 'Priority support',
      value: <Clear sx={{ fill: '#D12323' }} />,
    },
    {
      label: '24/7 support',
      value: <Clear sx={{ fill: '#D12323' }} />,
    },
    {
      label: 'End customer support phone',
      value: <Clear sx={{ fill: '#D12323' }} />,
    },
    {
      label: 'User report assigned to Monta',
      value: <CheckCircleOutlined sx={{ fill: '#66d123' }} />,
    },
    {
      label: 'Report actions',
      value: <CheckCircleOutlined sx={{ fill: '#66d123' }} />,
    },
    {
      label: 'App & Portalchat',
      value: <CheckCircleOutlined sx={{ fill: '#66d123' }} />,
    },
  ];

  const successSettingsItems = [
    {
      label: 'Dedicated success manager',
      value: <Clear sx={{ fill: '#D12323' }} />,
    },
    {
      label: 'Managed teams',
      value: <Clear sx={{ fill: '#D12323' }} />,
    },
  ];

  return (
    <MainCard
      sx={{ width: '100%', marginTop: '16px' }}
      title={
        <ItemCardInfo
          title="Support"
          value="Last updated: -"
          img={<TextSnippet />}
        />
      }
    >
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ minWidth: '150px' }} variant="subtitle1">
          Overview
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              border: `1px solid ${theme.palette.grey[200]}`,
              borderRadius: theme.spacing(1),
              padding: theme.spacing(3),
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <ItemCardInfo
                title="Success settings"
                value="Last updated: -"
                img={<HeadsetMic />}
              />
              <Chip variant="success" text="Active" />
            </Box>
            <Box sx={{ marginTop: '16px' }}>
              {successSettingsItems.map(({ label, value }) => (
                <Box
                  key={label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '8px 0',
                  }}
                >
                  <Typography variant="body1">{label}</Typography>
                  {value}
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              border: `1px solid ${theme.palette.grey[200]}`,
              borderRadius: theme.spacing(1),
              padding: theme.spacing(3),
              marginTop: '16px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <ItemCardInfo
                title="Support settings"
                value="Last updated: -"
                img={<HeadsetMic />}
              />
              <Chip variant="success" text="Active" />
            </Box>
            <Box sx={{ marginTop: '16px' }}>
              {supportSettingsItems.map(({ label, value }) => (
                <Box
                  key={label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '8px 0',
                  }}
                >
                  <Typography variant="body1">{label}</Typography>
                  {value}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </MainCard>
  );
};
