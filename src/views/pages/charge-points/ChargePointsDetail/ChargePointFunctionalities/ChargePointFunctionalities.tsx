import React from 'react';

import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Box, Stack, Switch, Typography } from '@mui/material';
import { Button } from 'ui-component/buttons/Button';
import MainCard from 'ui-component/cards/MainCard';

import { PersonAddAlt1, RocketLaunch } from '@mui/icons-material';
import { MenuItemsIds } from '../ChargePointsDetail.types';
import { ListItem } from './ListItem';

export const ChargePointFunctionalities = () => {
  return (
    // @ts-ignore
    <MainCard
      id={MenuItemsIds.FUNCTIONALITIES}
      title={
        <ItemCardInfo
          title="Charge point functionalities"
          value="Last updated: -"
          img={<RocketLaunch />}
        />
      }
    >
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ minWidth: '150px' }} variant="subtitle1">
          Functionalities
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Stack spacing={2}>
            <ListItem
              title="Accessibility settings"
              description="Set your charge point to public, private or scheduled
                accessibility"
              cardTitle="Public"
              cardSubtitle={`Master pricing: 23131 \n US$0.00/kWh`}
              action={<Button size="large" text="Edit" />}
              icon={<PersonAddAlt1 />}
            />
            <ListItem
              title="Reservation"
              description="Enable reservation to let users reserve your charge point. You
                are able to set a maximum amount of minutes that users can
                reserve the charge point."
              cardTitle="Reservation"
              cardSubtitle="Max 10 minutes"
              action={<Button size="large" text="Edit" />}
              icon={<PersonAddAlt1 />}
            />
            <ListItem
              title="Cost"
              description="Add a cost metric to the charge point and track the actual cost
                of changing"
              cardTitle="Cost"
              action={<Button size="large" text="Enable" />}
              icon={<PersonAddAlt1 />}
            />
            <ListItem
              title="Look Cable"
              description="When enabled, the cable will be locked to the charge point"
              cardTitle="Lock Cable"
              cardSubtitle="Lock cable is not available for this charge point model"
              action={<Switch checked={false} name="sgr" size="small" />}
              icon={<PersonAddAlt1 />}
            />
            <ListItem
              title="In-app chat"
              description="Allow users charging on the charge point to contact you via app"
              cardTitle="In-app chat"
              cardSubtitle="Contact via app"
              action={<Switch checked={true} name="sgr" size="small" />}
              icon={<PersonAddAlt1 />}
            />
          </Stack>
        </Box>
      </Box>
    </MainCard>
  );
};
