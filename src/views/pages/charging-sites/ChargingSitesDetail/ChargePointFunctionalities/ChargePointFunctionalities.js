import React from 'react';

import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Box, Switch, Typography } from '@mui/material';
import { Button } from 'ui-component/buttons/Button';
import MainCard from 'ui-component/cards/MainCard';

import { PersonAddAlt1, TextSnippet } from '@mui/icons-material';
import * as S from '../../../teams/TeamsDetail/TeamsDetailTabs/InviteMemberModal/InviteMemberModal.styles';

export const ChargePointFunctionalities = () => {
  return (
    <MainCard
      sx={{ width: '100%', marginTop: '16px' }}
      title={
        <ItemCardInfo
          title="Charge point functionalities"
          value="Last updated: -"
          img={<TextSnippet />}
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              flexBasis: '100%',
            }}
          >
            <Box>
              <Typography variant="subtitle1">
                Accessibility settings
              </Typography>
              <Typography variant="body1">
                Set your charge point to public, private or scheduled
                accessibility
              </Typography>
              <S.CardItem>
                <S.Icon>
                  <PersonAddAlt1 />
                </S.Icon>
                <Box>
                  <Typography variant="subtitle1">Public</Typography>
                  <Typography variant="caption">
                    Master pricing: 23131
                  </Typography>
                  <Typography variant="caption">US$0.00/kWh</Typography>
                </Box>
                <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
                  <Button size="large" text="Edit" />
                </Box>
              </S.CardItem>
            </Box>
            <Box>
              <Typography variant="subtitle1">Reservation</Typography>
              <Typography variant="body1">
                Enable reservation to let users reserve your charge point. You
                are able to set a maximum amount of minutes that users can
                reserve the charge point.
              </Typography>
              <S.CardItem>
                <S.Icon>
                  <PersonAddAlt1 />
                </S.Icon>
                <Box>
                  <Typography variant="subtitle1">Reservation</Typography>
                  <Typography variant="caption">Max 10 minutes</Typography>
                </Box>
                <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
                  <Button size="large" text="Edit" />
                </Box>
              </S.CardItem>
            </Box>
            <Box>
              <Typography variant="subtitle1">Cost</Typography>
              <Typography variant="body1">
                Add a cost metric to the charge point and track the actual cost
                of changing
              </Typography>
              <S.CardItem>
                <S.Icon>
                  <PersonAddAlt1 />
                </S.Icon>
                <Box>
                  <Typography variant="subtitle1">Cost</Typography>
                </Box>
                <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
                  <Button size="large" text="Enable" />
                </Box>
              </S.CardItem>
            </Box>
            <Box>
              <Typography variant="subtitle1">Look Cable</Typography>
              <Typography variant="body1">
                When enabled, the cable will be locked to the charge point
              </Typography>
              <S.CardItem>
                <S.Icon>
                  <PersonAddAlt1 />
                </S.Icon>
                <Box>
                  <Typography variant="subtitle1">Lock Cable</Typography>
                  <Typography variant="caption">
                    Lock cable is not available for this charge point model
                  </Typography>
                </Box>
                <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
                  <Switch checked={false} name="sgr" size="small" />
                </Box>
              </S.CardItem>
            </Box>
            <Box>
              <Typography variant="subtitle1">In-app chat</Typography>
              <Typography variant="body1">
                Allow users charging on the charge point to contact you via app
              </Typography>
              <S.CardItem>
                <S.Icon>
                  <PersonAddAlt1 />
                </S.Icon>
                <Box>
                  <Typography variant="subtitle1">In-app chat</Typography>
                  <Typography variant="caption">Contact via app</Typography>
                </Box>
                <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
                  <Switch checked={true} name="sgr" size="small" />
                </Box>
              </S.CardItem>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainCard>
  );
};
