import React from 'react';

import MuiButton from '@mui/material/Button';

export const Button = ({
  text,
  children = null,
  size = 'medium',
  variant = 'contained',
  disabled = false,
  color = 'primary',
  textColor = 'white',
  ...props
}) => {
  return (
    <MuiButton
      disableElevation
      disabled={disabled}
      variant={variant}
      size={size}
      sx={{ color: textColor }}
      {...props}
    >
      {text ?? children}
    </MuiButton>
  );
};
