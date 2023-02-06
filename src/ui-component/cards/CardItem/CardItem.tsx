import React, { FC } from 'react';

import { Box, Typography } from '@mui/material';

import * as S from './CardItem.styles';
import { CardItemProps } from './CardItem.types';

export const CardItem: FC<CardItemProps> = ({
  icon,
  action,
  title,
  subtitle,
}) => {
  return (
    <S.CardItemWrapper>
      <S.Icon>{icon}</S.Icon>
      <Box>
        <Typography variant="subtitle1">{title}</Typography>
        {subtitle ? (
          <Typography variant="caption">{subtitle}</Typography>
        ) : null}
      </Box>
      <S.ActionWrapper>{action}</S.ActionWrapper>
    </S.CardItemWrapper>
  );
};
