import React from 'react';

import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Button } from 'ui-component/buttons/Button';
import { MainCard } from 'ui-component/cards/MainCard';

export const TeamInformation = ({ team }) => {
  return (
    <MainCard
      sx={{ width: '100%', marginTop: '16px' }}
      title={
        <ItemCardInfo
          title="Personal"
          value="user-909-8911"
          valueVariant="caption"
          img={team?.avatar || team?.name?.[0] || 'P'}
        />
      }
    >
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ minWidth: '150px' }} variant="subtitle1">
          Team information
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <TextField
            sx={{ width: '47%' }}
            size="small"
            label="Team Name"
            name="teamName"
            placeholder="Enter team name"
            value=""
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            sx={{ width: '47%' }}
            size="small"
            label="Address"
            name="address"
            value=""
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            sx={{ width: '47%' }}
            size="small"
            label="Contact mail"
            name="mail"
            value=""
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Select
            sx={{ width: '47%' }}
            size="small"
            name="category"
            label="Category"
            value={0}
            SelectProps={{
              native: true,
            }}
          >
            <MenuItem value={0}>Home</MenuItem>
          </Select>
          <TextField
            sx={{ width: '47%' }}
            size="small"
            label="EAN number(optional)"
            name="ean"
            value=""
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            sx={{ width: '47%' }}
            size="small"
            label="PO number(optional)"
            name="po"
            value=""
            InputLabelProps={{
              shrink: true,
            }}
            type="text"
          />
          <Button size="large" text="Save changes" />
        </Box>
      </Box>
    </MainCard>
  );
};
