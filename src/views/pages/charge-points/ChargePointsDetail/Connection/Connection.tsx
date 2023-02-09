import React from 'react';

import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Stack, Typography } from '@mui/material';
import { MainCard } from 'ui-component/cards/MainCard';

import { Timeline } from '@mui/icons-material';
import { MenuItemsIds } from '../ChargePointsDetail.types';
import { ConnectionListInfo } from './ConnectionListInfo';
import { ConnectionForm } from './ConnectionForm';
import { Formik } from 'formik';
import { ConnectionValues } from './Connection.types';
import * as S from './Connection.styles';

export const Connection = () => {
  return (
    // @ts-ignore
    <MainCard
      id={MenuItemsIds.CONNECTION}
      title={
        <ItemCardInfo
          title="Connected"
          value="Last connected: -"
          img={<Timeline />}
        />
      }
    >
      <Formik<ConnectionValues>
        initialValues={{
          integrationId: '',
          serialNumber: '',
          connectionId: '',
          ocpp: '',
          firmwareVersion: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Stack direction="row">
              <Typography sx={{ minWidth: '150px' }} variant="subtitle1">
                Connection
              </Typography>
              <S.ConnectionInfoWrapper>
                <ConnectionForm />
                <ConnectionListInfo />
              </S.ConnectionInfoWrapper>
            </Stack>
            <S.FormButton size="large" text="Update integration" />
          </form>
        )}
      </Formik>
    </MainCard>
  );
};
