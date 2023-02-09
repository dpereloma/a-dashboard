import { StyledComponentProps } from '@mui/styles';
import { WithStyles } from '@mui/styles/withStyles/withStyles';

export interface ProgressCardProps {
  color: string;
  percent: number;
  hours: number;
}

export interface ProgressTitleProps {
  palette: string;
  theme: any;
}

export interface BorderLinearProgressProps {
  palette: string;
  theme: any;
}
