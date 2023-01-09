import { styled } from '@mui/styles';

import {
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';

export const BorderLinearProgress = styled(LinearProgress)(
  ({ theme, palette }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: palette,
    },
  }),
);

export const ProgressTitle = styled(Typography)(({ palette }) => ({
  position: 'relative',
  paddingLeft: 24,
  '&:before': {
    content: '""',
    position: 'absolute',
    backgroundColor: palette,
    width: 16,
    height: 16,
    left: 0,
    borderRadius: '50%',
  },
}));

export const ProgressInfo = styled(Typography)(() => ({
  marginLeft: 'auto',
}));
