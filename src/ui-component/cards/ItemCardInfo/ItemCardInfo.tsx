import React, { FC } from 'react';

import { Box, Typography } from '@mui/material';

import * as S from './ItemCardInfo.styles';
import { ItemCardInfoProps } from './ItemCardInfo.types';

export const ItemCardInfo: FC<ItemCardInfoProps> = ({
  title,
  value,
  img,
  titleVariant = 'h2',
  valueVariant = 'body2',
  bgColor,
  color,
  additionalValue,
}) => {
  return (
    <S.Wrapper>
      {img ? (
        <S.Image color={color} bgColor={bgColor}>
          {img}
        </S.Image>
      ) : null}
      <S.TextWrapper hasValue={!!value}>
        <Typography variant={titleVariant}>{title}</Typography>
        {value ? (
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <Typography variant={valueVariant}>{value}</Typography>
            {additionalValue ? (
              <Typography
                sx={{ color: color ?? undefined }}
                variant={titleVariant}
              >
                {additionalValue}
              </Typography>
            ) : null}
          </Box>
        ) : null}
      </S.TextWrapper>
    </S.Wrapper>
  );
};
