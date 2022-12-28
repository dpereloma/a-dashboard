import { styled } from '@mui/material';

import MuiButton from '@mui/material/Button';

export const Button = styled(MuiButton)(({ theme }) => ({
    position: 'relative',
    height: theme.spacing(6),

    '&:hover': {
        background: theme.palette.secondary.main
    },

    [theme.breakpoints.down('tablet')]: {
        minWidth: 0,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    }
}));

export const Loading = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

export const Label = styled('span')(({ visible }) => ({
    color: visible ? 'transparent' : 'inherit',
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
}));
