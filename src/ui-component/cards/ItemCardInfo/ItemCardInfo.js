import React from 'react';
import PropTypes from 'prop-types';

import { Box, Typography } from '@mui/material';

import * as S from './ItemCardInfo.styles';

export const ItemCardInfo = ({
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

ItemCardInfo.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  img: PropTypes.node,
};
