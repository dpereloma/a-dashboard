import React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { MainCard } from 'ui-component/cards/MainCard';
import { CardItem } from 'ui-component/cards/CardItem';
import { SettingsForm } from './SettingsForm';
import { Formik } from 'formik';
import { SettingListInfo } from './SettingListInfo';

import {
  KeyboardArrowRight,
  PersonAddAlt1,
  Settings,
} from '@mui/icons-material';
import { MenuItemsIds } from '../ChargePointsDetail.types';
import { SettingsValues } from './ChargePointSettings.types';
import * as S from './ChargePointSettings.styles';

export const ChargePointSettings = () => {
  return (
    // @ts-ignore
    <MainCard
      id={MenuItemsIds.SETTINGS}
      title={<ItemCardInfo title="Settings" img={<Settings />} />}
    >
      <Formik<SettingsValues>
        initialValues={{
          name: '',
          chargingSite: '',
          location: '',
          chargingType: '',
          connector: '',
          maxKW: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Stack direction="row">
              <Typography sx={{ minWidth: '150px' }} variant="subtitle1">
                Settings
              </Typography>
              <S.SettingInfoWrapper>
                <Box sx={{ display: 'flex', gap: '16px' }}>
                  <SettingsForm />
                  <SettingListInfo />
                </Box>
                <Box>
                  <Typography>Charge point owner</Typography>
                  <CardItem
                    icon={<PersonAddAlt1 />}
                    title="User #85849"
                    subtitle="ID: 75848"
                  />
                </Box>
                <Box>
                  <Typography>Team</Typography>
                  <CardItem
                    icon={<PersonAddAlt1 />}
                    title="Dfdf"
                    subtitle="ID: 33242"
                    action={<KeyboardArrowRight />}
                  />
                </Box>
                <Box>
                  <Typography>Charging sites</Typography>
                  <CardItem
                    icon={<PersonAddAlt1 />}
                    title="Test"
                    subtitle="ID: 23131"
                    action={<KeyboardArrowRight />}
                  />
                </Box>
              </S.SettingInfoWrapper>
            </Stack>
            <S.FormButton type="submit" size="large" text="Save changes" />
          </form>
        )}
      </Formik>
    </MainCard>
  );
};
