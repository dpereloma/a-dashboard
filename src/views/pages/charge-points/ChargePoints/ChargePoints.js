import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import MainCard from 'ui-component/cards/MainCard';
import { SearchInput } from 'ui-component/inputs';
import { DropdownMenu } from 'ui-component/extended/DropdownMenu';
import { ChargePointsTable } from './ChargePointsTable';
import { ChargePointsFilter } from './ChargePointsFilter';
import { Button } from 'ui-component/buttons/Button';

import { useChargePoints } from './ChargePoints.utils';
import * as S from './ChargePoints.styles';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';

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
        title=" "
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
        <Box
          sx={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Typography variant="h3">Add charge point</Typography>
          <AnimateButton>
            <Button
              fullWidth
              text="Search by SN"
              size="large"
              onClick={() => navigate('/charge-points/create')}
            />
          </AnimateButton>
          <AnimateButton>
            <Button
              disabled={true}
              fullWidth
              size="large"
              color="secondary"
              text="Add custom charge point"
            />
          </AnimateButton>
        </Box>
      </Drawer>
    </>
  );
};

export default ChargePoints;
