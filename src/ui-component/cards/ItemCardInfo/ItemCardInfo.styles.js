import { styled } from '@mui/styles';

import { Box } from '@mui/material';

export const Image = styled(Box)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  borderRadius: '50%',
  backgroundColor: theme.palette.grey[100],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: theme.spacing(2),
}));

export const TextWrapper = styled(Box)(() => ({
  display: 'flex',
  alignSelf: 'stretch',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));
