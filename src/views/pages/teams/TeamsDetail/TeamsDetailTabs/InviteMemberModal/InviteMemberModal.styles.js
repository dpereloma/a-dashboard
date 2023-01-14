import { styled } from '@mui/styles';
import { Box } from '@mui/material';

export const Icon = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  background: theme.palette.grey[100],
  width: theme.spacing(5),
  height: theme.spacing(5),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const CardItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center',
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(3),
  cursor: 'pointer',
}));
