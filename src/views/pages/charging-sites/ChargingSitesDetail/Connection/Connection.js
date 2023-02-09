import React from 'react';

import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Box, TextField, Typography } from '@mui/material';
import { Button } from 'ui-component/buttons/Button';
import { MainCard } from 'ui-component/cards/MainCard';

import { Timeline } from '@mui/icons-material';

export const Connection = () => {
  return (
    <MainCard
      sx={{ width: '100%', marginTop: '16px' }}
      title={
        <ItemCardInfo
          title="Connected"
          value="Last connected: -"
          img={<Timeline />}
        />
      }
    >
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ minWidth: '150px' }} variant="subtitle1">
          Connection
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
            <Box>
              <Typography>Integration ID</Typography>
              <TextField
                name="id"
                size="small"
                fullWidth
                type="text"
                value="213131"
              />
            </Box>
            <Box>
              <Typography>Serial number</Typography>
              <TextField
                name="serialNumber"
                size="small"
                fullWidth
                type="text"
                value="SDSD33424SD"
              />
            </Box>
            <Box>
              <Typography>Connector ID</Typography>
              <TextField
                name="connectorId"
                size="small"
                fullWidth
                type="text"
                value="2"
              />
            </Box>
            <Box>
              <Typography>OCPP</Typography>
              <TextField
                name="ocpp"
                size="small"
                fullWidth
                type="text"
                value="Yes"
              />
            </Box>
            <Box>
              <Typography>Firmware version</Typography>
              <TextField
                name="version"
                size="small"
                fullWidth
                type="text"
                value="0.9.87"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              flexBasis: '100%',
            }}
          >
            <Typography variant="subtitle1">
              Your charge point connection
            </Typography>
            <Typography variant="body1">
              Here you can find details about the charge point connection, and
              delete or add a new connection
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">Create at:</Typography>
                <Typography variant="subtitle1">Nov 17 2022, 15:33</Typography>
              </li>
              <li>
                <Typography variant="body1">Last connected:</Typography>
                <Typography variant="subtitle1">Nov 17 2022, 15:33</Typography>
              </li>
              <li>
                <Typography variant="body1">Updated:</Typography>
                <Typography variant="subtitle1">Nov 17 2022, 15:33</Typography>
              </li>
              <li>
                <Typography variant="body1">Status:</Typography>
                <Typography variant="subtitle1">disconnected</Typography>
              </li>
              <li>
                <Typography variant="body1">Status:</Typography>
                <Typography variant="subtitle1">Unavailable</Typography>
              </li>
              <li>
                <Typography variant="body1">Connector available:</Typography>
                <Typography variant="subtitle1">No</Typography>
              </li>
              <li>
                <Typography variant="body1">MID:</Typography>
                <Typography variant="subtitle1">No</Typography>
              </li>
              <li>
                <Typography variant="body1">Meter accuracy:</Typography>
                <Typography variant="subtitle1">None</Typography>
              </li>
              <li>
                <Typography variant="body1">Cell strength</Typography>
                <Typography variant="subtitle1">-</Typography>
              </li>
              <li>
                <Typography variant="body1">Wi-fi strength:</Typography>
                <Typography variant="subtitle1">-</Typography>
              </li>
              <li>
                <Typography variant="body1">Cable lock:</Typography>
                <Typography variant="subtitle1">No</Typography>
              </li>
              <li>
                <Typography variant="body1">Free charging mode</Typography>
                <Typography variant="subtitle1">No</Typography>
              </li>
              <li>
                <Typography variant="body1">View logs</Typography>
              </li>
              <li>
                <Typography variant="body1">View local charge keys</Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Button size="large" text="Update integration" />
    </MainCard>
  );
};
