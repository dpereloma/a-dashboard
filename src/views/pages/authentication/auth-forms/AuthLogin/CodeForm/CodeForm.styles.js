import { styled } from '@mui/material/styles';

export const ActionsContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(4),

    [theme.breakpoints.down('laptop')]: {
        position: 'absolute',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export const AutocompleteInput = styled('input')({
    position: 'absolute',
    opacity: 0,
});
