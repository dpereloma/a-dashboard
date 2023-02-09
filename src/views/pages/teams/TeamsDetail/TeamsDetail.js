import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';
import { MainCard } from 'ui-component/cards/MainCard';
import { TeamsDetailTabs } from './TeamsDetailTabs';

import { ArrowBackIos } from '@mui/icons-material';

const TeamsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const teams = useSelector((state) => state.teams.teams);

  const team = useMemo(() => {
    return teams.find((item) => item.id === Number(id));
  }, [id, teams]);

  const renderCardTitle = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <ArrowBackIos sx={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
      <Typography variant="h1">{team.name}</Typography>
    </Box>
  );

  return (
    <>
      <MainCard title={renderCardTitle()} content={false} />
      <TeamsDetailTabs />
    </>
  );
};

export default TeamsDetail;
