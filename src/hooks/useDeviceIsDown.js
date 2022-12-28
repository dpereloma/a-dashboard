import { useMediaQuery } from '@mui/material';

/**
 * Shotcut for MUI useMediaQuery hook
 *
 * @param device - Device name (breakpoint)
 */
export function useDeviceIsDown(device) {
    return useMediaQuery((theme) => theme.breakpoints.down(device));
}
