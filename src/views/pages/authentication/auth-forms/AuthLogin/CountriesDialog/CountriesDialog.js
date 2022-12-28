import { styled } from '@mui/material';
import { useMemo, useState } from 'react';

import { Typography, Box, Button, DialogContent, DialogActions } from '@mui/material';
import { CountriesList } from './CountriesList';
import { SearchInput } from 'ui-component/inputs';
import { Scrollbar } from 'ui-component/Scrollbar';
import { EdgeDialog } from 'ui-component/EdgeDialog';

import { useCountrySelect } from './useCountrySelect';
import { useDeviceIsDown } from 'hooks/useDeviceIsDown';

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '100%'
});

const ListWrapper = styled('div')({
    flexGrow: 1,
    overflow: 'auto'
});

const SearchWrapper = styled('div')({
    marginBottom: 8
});

export function CountriesDialog({ country, onCountrySelect, onClose, ...props }) {
    const isMobile = useDeviceIsDown('laptop');
    const [searchValue, setSearchValue] = useState('');

    const { countries, current, set, select, isDirty } = useCountrySelect(country);

    const data = useMemo(() => {
        return Object.values(countries).filter((country) => country.nameCode.toLowerCase().includes(searchValue.toLowerCase()));
    }, [countries, searchValue]);

    const handleSelect = (country) => {
        if (isMobile) {
            select(country.code);
            set();
            onCountrySelect(country);
        } else {
            select(country.code);
        }
    };

    const handleSet = () => {
        set();
        onCountrySelect(current);
    };

    const renderResult = () => {
        return (
            <Container>
                <SearchWrapper>
                    <SearchInput
                        value={searchValue}
                        placeholder="Поиск страны"
                        clearBtnText="Отменить"
                        onChange={(e) => setSearchValue(e.target.value)}
                        onClear={() => setSearchValue('')}
                    />
                </SearchWrapper>
                <ListWrapper>
                    <Scrollbar>
                        {data.length ? (
                            <CountriesList countries={data} selected={current} onSelect={handleSelect} />
                        ) : (
                            <Typography variant="empty" component="div">
                                Страна не найдена
                            </Typography>
                        )}
                    </Scrollbar>
                </ListWrapper>
            </Container>
        );
    };

    return (
        <EdgeDialog {...props} title="Выбрать страну" onClose={onClose}>
            <DialogContent>
                <Box width={isMobile ? '100%' : 375} height={isMobile ? '80vh' : 400}>
                    {renderResult()}
                </Box>
            </DialogContent>
            {!isMobile && (
                <DialogActions>
                    <Button variant="contained" color="primary" fullWidth disabled={!isDirty} onClick={handleSet}>
                        Выбрать
                    </Button>
                </DialogActions>
            )}
        </EdgeDialog>
    );
}
