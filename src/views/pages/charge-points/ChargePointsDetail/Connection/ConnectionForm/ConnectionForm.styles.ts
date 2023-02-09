import { Box } from '@mui/material';
import { styled } from '@mui/styles';

export const FormWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  flexBasis: '100%',
}));
