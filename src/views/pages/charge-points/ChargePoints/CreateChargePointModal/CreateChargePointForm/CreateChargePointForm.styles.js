import { styled } from '@mui/styles';

import { Box, Typography } from '@mui/material';

export const FormItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
    marginBottom: theme.spacing(2)
}));

export const Label = styled(Typography)(() => ({
    width: '40%'
}));
