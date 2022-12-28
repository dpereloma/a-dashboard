import { styled } from '@mui/material';
import InputMask from 'react-input-mask';

import { Typography, InputBase, FormHelperText, ButtonBase, Box } from '@mui/material';
import { ArrowChevron } from 'ui-component/icons/ArrowChevron';

const Container = styled('div')(({ error, disabled, theme }) => ({
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: error ? theme.palette.error.main : theme.grey50,
    backgroundColor: disabled ? 'white' : 'transparent',
    color: disabled ? 'white' : theme.grey500,
    display: 'flex',
    alignItems: 'center',
    height: 48,
    overflow: 'hidden'
}));

const DropdownButton = styled(ButtonBase)({
    borderRadius: 8,
    marginLeft: 4,
    padding: '10px 4px 10px 14px'
});

const CountryAdornment = styled('div')({
    display: 'flex',
    alignItems: 'center'
});

const CountryCodeAdornment = styled('div')({
    lineHeight: 0,
    marginLeft: 8,
    marginRight: 6
});

const FlagWrapper = styled('div')(() => ({
    borderRadius: 2,
    width: 28,
    height: 20,
    backgroundColor: 'green'
}));

const Input = styled(InputBase)(() => ({
    width: '100%',
    height: '100%',

    '& .MuiInputBase-input': {
        paddingTop: 5
    },

    '&.Mui-disabled': {
        color: 'red',
        backgroundColor: 'green'
    }
}));

const Label = styled(Typography)(() => ({
    marginBottom: 8
}));

export function PhoneInput({ label, value, error, country, disabled, helperText, onChange, onCountrySelectClick, ...props }) {
    return (
        <Box>
            <Label variant="subtitle1">{label}</Label>
            <Container error={error} disabled={disabled}>
                {onCountrySelectClick && (
                    <CountryAdornment>
                        <DropdownButton disabled={disabled} onClick={onCountrySelectClick}>
                            <FlagWrapper>
                                <img src={country.img} alt={country.code} width={28} height={20} />
                            </FlagWrapper>
                            <ArrowChevron fontSize="small" />
                        </DropdownButton>
                    </CountryAdornment>
                )}
                <CountryCodeAdornment
                    sx={{
                        color: !onCountrySelectClick && !value ? '#b3b3b3' : 'inherit'
                    }}
                >
                    {country.phoneCode}
                </CountryCodeAdornment>
                <InputMask value={value} placeholder={country.phoneMask} mask={country.phoneMask} disabled={disabled} onChange={onChange}>
                    {(inputProps) => <Input {...inputProps} {...props} disabled={disabled} type="tel" />}
                </InputMask>
            </Container>
            {!!helperText && (
                <FormHelperText error={error} variant="standard">
                    {helperText}
                </FormHelperText>
            )}
        </Box>
    );
}
