import { styled } from '@mui/material';

export const DefaultInput = styled('input')(({ theme, error }) => ({
  border: 0,
  borderStyle: 'solid',
  borderBottomWidth: theme.spacing(0.25),
  borderBottomColor: theme.palette.secondary.main,
  textAlign: 'center',
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
  outline: 'none',
  minWidth: 0,
  fontSize: '2rem',
  '&:not(:last-child)': {
    marginRight: theme.spacing(1),
  },
  '&:focus': {
    borderColor: error ? theme.palette.error.main : theme.palette.primary.main,
  },
}));

export const DefaultWrapper = styled('div')({
  display: 'flex',
});
