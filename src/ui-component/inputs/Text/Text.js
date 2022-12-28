import { styled, Typography } from '@mui/material';
import { Helpers } from 'helpers';

function getType(type, defaultType) {
    return (typeof type === 'object' ? type.desktop : type) ?? defaultType;
}

function getTypesByBreakpoints(theme, type) {
    if (typeof type !== 'object') {
        return {};
    }

    const styles = Object.entries(type)
        .map(([key, value]) => [theme.breakpoints.up(key), theme.fonts[value] ? { ...theme.fonts[value] } : undefined])
        .filter(([, value]) => !!value);

    return Object.fromEntries(styles);
}

/**
 * Text component with customization over theme fonts and palette colors
 */
export const Text = styled(Typography, {
    skipVariantsResolver: true,
    shouldForwardProp: Helpers.excludeProps(['type', 'textColor'])
})(({ type, textColor, theme }) => ({
    // ...theme.fonts[getType(type, 'body3.regular.14/24')],
    // color: textColor ? theme.palette.custom[textColor] : undefined,
    color: 'red',
    ...getTypesByBreakpoints(theme, type)
}));
