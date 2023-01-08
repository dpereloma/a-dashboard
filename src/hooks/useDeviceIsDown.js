import { useMediaQuery } from '@mui/material';

export const useDeviceIsDown = (device) => {
  return useMediaQuery((theme) => theme.breakpoints.down(device));
};
