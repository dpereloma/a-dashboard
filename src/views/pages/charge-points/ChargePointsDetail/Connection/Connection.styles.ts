import { styled } from '@mui/styles';
import { Box } from '@mui/material';
import { Button } from 'ui-component/buttons/Button';

export const ConnectionInfoWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  gap: theme.spacing(3),
}));

export const FormButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(3),
  marginLeft: 'auto',
}));
