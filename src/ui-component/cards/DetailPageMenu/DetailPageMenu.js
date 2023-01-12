import React from 'react';
import { Box, Typography } from '@mui/material';

import * as S from './DetailPageMenu.styles';
import MainCard from '../MainCard';

export const DetailPageMenu = ({ menuItems }) => {
  return (
    <Box sx={{ minWidth: '300px' }}>
      <MainCard
        sx={{ marginTop: '16px', position: 'sticky', top: '100px' }}
        contentSX={{ padding: 0, '&:last-child': { padding: 0 } }}
        title="Overview"
      >
        {menuItems.map(({ icon, text }) => (
          <S.SideMenuItem key={text}>
            <S.SideMenuItemIcon>{icon}</S.SideMenuItemIcon>
            <Typography variant="subtitle1">{text}</Typography>
          </S.SideMenuItem>
        ))}
      </MainCard>
    </Box>
  );
};
