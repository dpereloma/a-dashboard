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
      <Button
        text="Add charge point"
        // onClick={() => navigate('/charge-points/create')}
        onClick={handleToggle}
      />
    </S.ActionsWrapper>
  );

  return (
    <>
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
        <Box
          sx={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Typography variant="h3">Add charge point</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <AnimateButton>
              <Button
                fullWidth
                text="Search by SN"
                size="large"
                onClick={() => navigate('/charge-points/create')}
              />
            </AnimateButton>
            <Typography variant="caption">
              If you already connect the station to our OCPP
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <AnimateButton>
              <Button
                disabled={true}
                fullWidth
                size="large"
                color="secondary"
                text="Add custom charge point"
              />
            </AnimateButton>
            <Typography variant="caption">
              If you want to add station without connect to the server
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default ChargePoints;
