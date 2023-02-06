import { ReactNode } from 'react';
import { Variant } from '@mui/material/styles/createTypography';

export interface ItemCardInfoProps {
  title: string;
  value?: string;
  img?: ReactNode;
  titleVariant?: Variant;
  valueVariant?: Variant;
  bgColor?: string;
  color?: string;
  additionalValue?: string;
}

export interface ImageProps {
  bgColor?: string;
  color?: string;
  theme: any;
}

export interface TextWrapperProps {
  hasValue: boolean;
}
