import React from 'react';
import { Box, Typography } from '@mui/material';

import * as S from './DetailPageMenu.styles';
import { MainCard } from '../MainCard';
import { scrollToUp } from '../../../helpers';
import { Scrollbar } from '../../Scrollbar';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const DetailPageMenu = ({ menuItems }) => {
  return (
    <Box sx={{ minWidth: '300px' }}>
      <MainCard
        sx={{ marginTop: '16px', position: 'sticky', top: '100px' }}
        contentSX={{
          padding: 0,
          '&:last-child': { padding: 0 },
          // maxHeight: 'calc(100vh - 184px)',
        }}
        title="Overview"
      >
        <PerfectScrollbar
          style={{
            height: '100%',
            maxHeight: 'calc(100vh - 184px)',
            overflowX: 'hidden',
          }}
        >
          {menuItems.map(({ icon, text, id }) => (
            <S.SideMenuItem onClick={() => scrollToUp(id)} key={text}>
              <S.SideMenuItemIcon>{icon}</S.SideMenuItemIcon>
              <Typography variant="subtitle1">{text}</Typography>
            </S.SideMenuItem>
          ))}
        </PerfectScrollbar>
      </MainCard>
    </Box>
  );
};
