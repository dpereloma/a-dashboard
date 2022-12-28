import React, { useState } from 'react';

import { Button, IconButton } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import MainCard from 'ui-component/cards/MainCard';
import { SearchInput } from 'ui-component/inputs';
import { DropdownMenu } from 'ui-component/extended/DropdownMenu';
import { ChargePointsTable } from './ChargePointsTable';
import { ChargePointsFilter } from './ChargePointsFilter';
import { CreateChargePointModal } from './CreateChargePointModal';

import { useChargePoints } from './ChargePoints.utils';
import * as S from './ChargePoints.styles';

const ChargePoints = () => {
    const [openCreateModal, setOpenCreateModal] = useState(false);

    const { filteredChargePoints, filterValues, searchValue, handleChange, onSearchChange, onSearchClear, setChargePoints } =
        useChargePoints();

    const renderFilterList = () => <ChargePointsFilter handleChange={handleChange} filterValues={filterValues} />;

    const renderHeaderAction = () => (
        <Button disableElevation variant="contained" size="medium" sx={{ color: 'inherit' }} onClick={() => setOpenCreateModal(true)}>
            Add charge point
        </Button>
    );

    const renderAction = () => (
        <S.ActionsWrapper>
            <SearchInput
                value={searchValue}
                placeholder="Поиск"
                clearBtnText="Отменить"
                onChange={onSearchChange}
                onClear={onSearchClear}
            />
            <IconButton size="small">
                <DropdownMenu icon={FilterList} renderFilterList={renderFilterList} />
            </IconButton>
        </S.ActionsWrapper>
    );

    return (
        <>
            <MainCard title="Charge Points" secondary={renderHeaderAction()} content={false} />
            <MainCard contentSX={{ padding: 0 }} title="List Table" secondary={renderAction()}>
                <ChargePointsTable filteredChargePoints={filteredChargePoints} />
            </MainCard>
            <CreateChargePointModal isOpen={openCreateModal} onClose={() => setOpenCreateModal(false)} setChargePoints={setChargePoints} />
        </>
    );
};

export default ChargePoints;
