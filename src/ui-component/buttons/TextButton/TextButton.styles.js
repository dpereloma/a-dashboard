import { styled } from '@mui/material';
import MuiButton from '@mui/material/Button';
import * as Helpers from 'helpers';

export const Button = styled(MuiButton, {
  skipVariantsResolver: true,
  shouldForwardProp: Helpers.excludeProps('fontWeight'),
})(({ fontWeight }) => ({
  fontWeight: fontWeight === 'bold' ? 'bold' : 'normal',
}));
