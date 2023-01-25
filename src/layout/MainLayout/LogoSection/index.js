import { Link } from 'react-router-dom';

import { ButtonBase, Typography } from '@mui/material';

import config from 'config';

const LogoSection = () => (
  <ButtonBase disableRipple component={Link} to={config.defaultPath}>
    <Typography variant="h2">ELECTRO</Typography>
  </ButtonBase>
);

export default LogoSection;
