import { styled } from '@mui/styles';

import { Box } from '@mui/material';

import { ImageProps, TextWrapperProps } from './ItemCardInfo.types';

export const Image = styled(Box)(({ theme, bgColor, color }: ImageProps) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  borderRadius: '50%',
  backgroundColor: bgColor ?? theme.palette.grey[100],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: color ?? 'black',
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

export const TextWrapper = styled(Box)(({ hasValue }: TextWrapperProps) => ({
  display: 'flex',
  alignSelf: 'stretch',
  flexDirection: 'column',
  justifyContent: hasValue ? 'space-around' : 'center',
}));
