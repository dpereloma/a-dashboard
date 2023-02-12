import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { Box, Stack } from '@mui/material';
import { MainCard } from 'ui-component/cards/MainCard';

import { ArrowBackIos } from '@mui/icons-material';
import { useChargePoint } from 'features/charge-points/queries';
import { DetailPageMenu } from 'ui-component/cards/DetailPageMenu';
import { ChargePointFunctionalities } from './ChargePointFunctionalities';
import { Subscriptions } from './Subscriptions';
import { Connection } from './Connection';
import { ChargePointSettings } from './ChargePointSettings';
import { Overview } from './Overview';
import { menuItems } from './ChargePointsDetail.utils';
import { ChargeSession } from './ChargeSession';
import { Transactions } from './Transactions';

const ChargePointsDetail = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const { data: chargePoint } = useChargePoint(id);

  const renderCardTitle = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <ArrowBackIos sx={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
      {`#${id} - ${chargePoint?.device?.chargePointModel}`}
    </Box>
  );
  return (
    <>
      <MainCard title={renderCardTitle()} content={false} />
      <Stack spacing={2} direction="row">
        <Stack sx={{ flexGrow: 1 }} spacing={2}>
          <Overview />
          <ChargePointSettings />
          <ChargeSession />
          <Transactions deviceId={chargePoint?.device?.deviceId} />
          <Subscriptions />
          <ChargePointFunctionalities />
          <Connection />
        </Stack>
        <DetailPageMenu menuItems={menuItems} />
      </Stack>
    </>
  );
};

export default ChargePointsDetail;
