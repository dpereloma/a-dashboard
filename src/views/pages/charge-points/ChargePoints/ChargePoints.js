import React, { useState } from 'react';

import { IconButton } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import MainCard from 'ui-component/cards/MainCard';
import { SearchInput } from 'ui-component/inputs';
import { DropdownMenu } from 'ui-component/extended/DropdownMenu';
import { ChargePointsTable } from './ChargePointsTable';
import { ChargePointsFilter } from './ChargePointsFilter';
import { CreateChargePointModal } from './CreateChargePointModal';
import { Button } from 'ui-component/buttons/Button';

import { useChargePoints } from './ChargePoints.utils';
import * as S from './ChargePoints.styles';

const ChargePoints = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const {
    filteredChargePoints,
    filterValues,
    searchValue,
    handleChange,
    onSearchChange,
    onSearchClear,
  } = useChargePoints();

  const renderFilterList = () => (
    <ChargePointsFilter
      handleChange={handleChange}
      filterValues={filterValues}
    />
  );

  const renderHeaderAction = () => (
    <Button text="Add charge point" onClick={() => setOpenCreateModal(true)} />
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
        <DropdownMenu icon={FilterList} renderContent={renderFilterList} />
      </IconButton>
    </S.ActionsWrapper>
  );

  return (
    <>
      <MainCard
        title="Charge Points"
        secondary={renderHeaderAction()}
        content={false}
      />
      <MainCard
        sx={{ marginTop: '16px' }}
        contentSX={{ padding: 0 }}
        title="List Table"
        secondary={renderAction()}
      >
        <ChargePointsTable chargePoints={filteredChargePoints} />
      </MainCard>
      <CreateChargePointModal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
      />
    </>
  );
};

export default ChargePoints;
