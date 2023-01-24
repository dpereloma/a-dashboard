import React from 'react';

import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Box, Divider, Switch, TextField, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import { TextSnippet } from '@mui/icons-material';

export const InstallerSettings = () => {
  return (
    <MainCard
      sx={{ width: '100%', marginTop: '16px' }}
      title={
        <ItemCardInfo
          title="Installer settings"
          value="Last updated: -"
          img={<TextSnippet />}
        />
      }
    >
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ minWidth: '150px' }} variant="subtitle1">
          Settings
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <TextField
            fullWidth
            size="small"
            label="Installer name"
            name="name"
            value=""
            InputLabelProps={{
              shrink: true,
            }}
            type="text"
          />
          <TextField
            fullWidth
            size="small"
            label="Installer email"
            name="email"
            value=""
            InputLabelProps={{
              shrink: true,
            }}
            type="text"
          />
          <TextField
            fullWidth
            size="small"
            label="Installer phone"
            name="phone"
            value=""
            InputLabelProps={{
              shrink: true,
            }}
            type="text"
          />
          <TextField
            fullWidth
            size="small"
            label="Want to receive mail updates?"
            name="isReceive"
            value=""
            InputLabelProps={{
              shrink: true,
            }}
            type="text"
          />
          <TextField
            fullWidth
            size="small"
            label="Enter email for updated"
            name="updatedEmail"
            value=""
            InputLabelProps={{
              shrink: true,
            }}
            type="text"
          />
          <Divider />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography>System generated reports</Typography>
            <Switch checked={true} name="sgr" size="small" />
          </Box>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography>User generated reports</Typography>
            <Switch checked={true} name="ugr" size="small" />
          </Box>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography>Intercom generated reports</Typography>
            <Switch checked={true} name="igr" size="small" />
          </Box>
        </Box>
      </Box>
    </MainCard>
  );
};
