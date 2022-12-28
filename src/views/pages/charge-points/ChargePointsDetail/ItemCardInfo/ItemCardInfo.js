import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

import * as S from './ItemCardInfo.styles';

export const ItemCardInfo = ({ title, value, img }) => {
    return (
        <S.Wrapper>
            <S.Image>{img}</S.Image>
            <S.TextWrapper>
                <Typography variant="body2">{title}</Typography>
                <Typography variant="h1">{value}</Typography>
            </S.TextWrapper>
        </S.Wrapper>
    );
};

ItemCardInfo.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    img: PropTypes.node
};
