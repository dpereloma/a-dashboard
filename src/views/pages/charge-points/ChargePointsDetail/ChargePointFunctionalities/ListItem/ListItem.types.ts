import { ReactNode } from 'react';

export interface ListItemProps {
  title: string;
  description: string;
  cardTitle: string;
  cardSubtitle?: string;
  action: ReactNode;
  icon: ReactNode;
}
