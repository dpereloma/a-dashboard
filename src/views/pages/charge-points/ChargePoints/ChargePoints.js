import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Drawer, IconButton } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import MainCard from 'ui-component/cards/MainCard';
import { SearchInput } from 'ui-component/inputs';
import { DropdownMenu } from 'ui-component/extended/DropdownMenu';
import { ChargePointsTable } from './ChargePointsTable';
import { ChargePointsFilter } from './ChargePointsFilter';
import { Button } from 'ui-component/buttons/Button';

import { useChargePoints } from './ChargePoints.utils';
import * as S from './ChargePoints.styles';

const ChargePoints = () => {
  const navigate = useNavigate();

  const {
    filteredChargePoints,
    filterValues,
    searchValue,
    open,
    handleChange,
    handleToggle,
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
    <Button
      text="Add charge point"
      // onClick={() => navigate('/charge-points/create')}
      onClick={handleToggle}
    />
  );

  const renderAction = () => (
    <S.ActionsWrapper>
      <SearchInput
        value={searchValue}
        placeholder="Search"
        clearBtnText="Cancel"
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
        title="Charge Points"
        secondary={renderAction()}
      >
        <ChargePointsTable chargePoints={filteredChargePoints} />
      </MainCard>
      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 280,
          },
        }}
      >
        111
      </Drawer>
    </>
  );
};

export default ChargePoints;
