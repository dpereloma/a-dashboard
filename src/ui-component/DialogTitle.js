import React from 'react';
import { styled } from '@mui/material';

import IconButton from '@mui/material/IconButton';

import { Close } from '@mui/icons-material';

const Title = styled('h2')(() => ({
    flexGrow: 1,
    margin: 0
}));

const Wrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 16
});

export function DialogTitle({ children, className, onClose }) {
    return (
        <Wrapper className={className}>
            <Title>{children}</Title>
            <IconButton size="small" onClick={onClose}>
                <Close fontSize="small" />
            </IconButton>
        </Wrapper>
    );
}
