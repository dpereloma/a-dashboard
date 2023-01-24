import { useTheme } from '@mui/styles';

import MuiChip from '@mui/material/Chip';

export const Chip = ({ variant = 'default', text }) => {
  const theme = useTheme();

  const chipSX = {
    height: 24,
    padding: '0 6px',
    borderRadius: '8px',
  };

  const chipErrorSX = {
    ...chipSX,
    color: theme.palette.orange.dark,
    backgroundColor: theme.palette.orange.light,
  };

  const chipWarningSX = {
    ...chipSX,
    color: theme.palette.warning.dark,
    backgroundColor: theme.palette.warning.light,
  };

  const chipSuccessSX = {
    ...chipSX,
    color: theme.palette.success.dark,
    backgroundColor: theme.palette.success.light,
  };

  const sx = {
    default: chipSX,
    success: chipSuccessSX,
    warning: chipWarningSX,
    error: chipErrorSX,
  };

  return <MuiChip sx={sx[variant]} label={text} />;
};
