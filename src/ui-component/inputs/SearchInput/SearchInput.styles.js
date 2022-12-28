import { styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { Search } from '@mui/icons-material';
import { TextButton } from '../../buttons';

export const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2)
}));

export const Wrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    borderRadius: theme.spacing(1.5),
    boxSizing: 'border-box',
    flex: '1 0 auto'
}));

export const Input = styled(InputBase)(({ theme }) => ({
    backgroundColor: 'transparent',
    border: 0,
    outline: 'none',
    width: '100%',
    fontSize: theme.spacing(2),
    lineHeight: theme.spacing(3),
    padding: '2px 10px',

    '&:placeholder': {
        color: 'red'
    }
}));

export const SearchIcon = styled(Search)(({ theme }) => ({
    color: theme.palette.grey100
}));

export const Button = styled(TextButton)(() => ({
    padding: 0,
    minWidth: 0
}));
