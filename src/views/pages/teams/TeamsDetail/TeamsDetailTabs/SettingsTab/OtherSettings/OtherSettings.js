import React from 'react';

import {
  Box,
  Divider,
  MenuItem,
  Select,
  Switch,
  Typography,
} from '@mui/material';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Button } from 'ui-component/buttons/Button';
import MainCard from 'ui-component/cards/MainCard';

import { TextSnippet } from '@mui/icons-material';

export const OtherSettings = () => {
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
            gap: '24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              flexBasis: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography>Auto accept join requests</Typography>
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
              <Typography>Auto generate charging sites</Typography>
              <Switch checked={true} name="ugr" size="small" />
            </Box>
            <Divider />
            <Select
              sx={{ width: '47%' }}
              fullWidth
              size="small"
              name="theme"
              label="Theme"
              value={0}
              SelectProps={{
                native: true,
              }}
            >
              <MenuItem value={0}>Home</MenuItem>
            </Select>
            <Button size="large" text="Save theme" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              flexBasis: '100%',
            }}
          >
            <Typography variant="subtitle1">Other settings</Typography>
            <Typography variant="body1">
              Enable users to automatically join your Team without your approval
            </Typography>
            <Typography variant="body1">
              Automatically create charging sites with charge point in thr same
              location
            </Typography>
          </Box>
        </Box>
      </Box>
    </MainCard>
  );
};
