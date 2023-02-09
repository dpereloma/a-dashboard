import { ReactNode } from 'react';

export interface CardItemProps {
  icon: ReactNode;
  action?: ReactNode;
  title: string;
  subtitle?: string;
}
