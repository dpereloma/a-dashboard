import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { DetailPageMenu } from 'ui-component/cards/DetailPageMenu';
import { Overview } from './Overview';
import { Subscriptions } from './Subscriptions';
import { ChargePointFunctionalities } from './ChargePointFunctionalities';
import { Connection } from './Connection';

import {
  ArrowBackIos,
  CompareArrows,
  Settings,
  Power,
  WorkspacePremium,
  Timeline,
  RocketLaunch,
} from '@mui/icons-material';

const ChargingSitesDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const chargingSites = useSelector(
    (state) => state.chargingSites.chargingSites,
  );

  const menuItems = [
    {
      icon: <CompareArrows />,
      text: 'Overview',
    },
    {
      icon: <Settings />,
      text: 'Charge point settings',
    },
    {
      icon: <Power />,
      text: 'Charge sessions',
    },
    {
      icon: <WorkspacePremium />,
      text: 'Subscriptions',
    },
    {
      icon: <RocketLaunch />,
      text: 'Charge point functionalities',
    },
    {
      icon: <Timeline />,
      text: 'Connection',
    },
    {
      icon: <Timeline />,
      text: 'Deeplink',
    },
  ];

  const chargingSiteItem = useMemo(() => {
    return chargingSites.find((item) => item.id === Number(id));
  }, [id, chargingSites]);

  const renderCardTitle = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <ArrowBackIos sx={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
      {`#${id} - ${chargingSiteItem.name}`}
    </Box>
  );
  return (
    <>
      <MainCard title={renderCardTitle()} content={false} />
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Overview />
          <Subscriptions />
          <ChargePointFunctionalities />
          <Connection />
        </Box>
        <DetailPageMenu menuItems={menuItems} />
      </Box>
    </>
  );
};

export default ChargingSitesDetail;
