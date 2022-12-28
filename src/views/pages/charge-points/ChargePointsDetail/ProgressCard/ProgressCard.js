import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import * as S from './ProgressCard.styles';

export const ProgressCard = ({ color, percent, hours }) => {
    return (
        <Box sx={{ margin: '16px 0' }}>
            <Box sx={{ marginBottom: '16px', display: 'flex' }}>
                <S.ProgressTitle palette={color}>Available</S.ProgressTitle>
                <S.ProgressInfo>
                    {percent}% - {hours} hours
                </S.ProgressInfo>
            </Box>
            <S.BorderLinearProgress palette={color} variant="determinate" value={percent} />
        </Box>
    );
};

ProgressCard.propTypes = {
    color: PropTypes.string,
    percent: PropTypes.number,
    hours: PropTypes.number
};
