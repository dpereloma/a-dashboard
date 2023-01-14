import InputAdornment from '@mui/material/InputAdornment';
import * as S from './SearchInput.styles';

export const SearchInput = ({ value, clearBtnText, onClear, ...props }) => {
  return (
    <S.Root>
      <S.Wrapper>
        <S.Input
          fullWidth
          value={value}
          startAdornment={
            <InputAdornment variant="standard" position="start">
              <S.SearchIcon fontSize="small" />
            </InputAdornment>
          }
          {...props}
        />
      </S.Wrapper>
      {onClear && !!value?.length && <S.Button onClick={onClear}></S.Button>}
    </S.Root>
  );
};
