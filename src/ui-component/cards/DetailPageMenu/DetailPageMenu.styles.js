import { styled } from '@mui/styles';
import { Box, MenuItem } from '@mui/material';

export const SideMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: '24px 16px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
}));

export const SideMenuItemIcon = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  background: theme.palette.grey[100],
  width: theme.spacing(5),
  height: theme.spacing(5),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: theme.spacing(2),
}));
