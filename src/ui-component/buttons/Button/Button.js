import React from 'react';

import MuiButton from '@mui/material/Button';

export const Button = ({
  text,
  children,
  size = 'medium',
  variant = 'contained',
  disabled = false,
  color = 'primary',
  ...props
}) => {
  return (
    <MuiButton
      disableElevation
      disabled={disabled}
      variant={variant}
      size={size}
      sx={{ color: 'white' }}
      {...props}
    >
      {text ?? children}
    </MuiButton>
  );
};