import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import * as S from './ProgressCard.styles';
import { ProgressCardProps } from './ProgressCard.types';

export const ProgressCard: FC<ProgressCardProps> = ({
  color,
  percent,
  hours,
}) => {
  return (
    <Box sx={{ margin: '16px 0' }}>
      <Box sx={{ marginBottom: '16px', display: 'flex' }}>
        <S.ProgressTitle palette={color}>Available</S.ProgressTitle>
        <S.ProgressInfo>
          {percent}% - {hours} hours
        </S.ProgressInfo>
      </Box>
      <S.BorderLinearProgress
        palette={color}
        variant="determinate"
        value={percent}
      />
    </Box>
  );
};
