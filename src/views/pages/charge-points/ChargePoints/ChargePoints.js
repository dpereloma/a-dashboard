import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import { MainCard } from 'ui-component/cards/MainCard';
import { SearchInput } from 'ui-component/inputs';
import { DropdownMenu } from 'ui-component/extended/DropdownMenu';
import { ChargePointsTable } from './ChargePointsTable';
import { ChargePointsFilter } from './ChargePointsFilter';
import { Button } from 'ui-component/buttons/Button';

import { useChargePoints } from './ChargePoints.utils';
import * as S from './ChargePoints.styles';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { Pagination } from '@mui/lab';
import { ArrowPagination } from '../../../../ui-component/ArrowPagination';

const ChargePoints = () => {
  const navigate = useNavigate();

  const {
    filteredChargePoints,
    filterValues,
    searchValue,
    open,
    isLoading,
    isError,
    page,
    hasNextPage,
    hasPrevPage,
    handleChangePage,
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
      <Button text="Add charge point" onClick={handleToggle} />
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
        {isLoading ? <Typography variant="body2">Loading...</Typography> : null}
        {isError ? <Typography variant="body2">Error</Typography> : null}
        <ChargePointsTable
          chargePoints={filteredChargePoints}
          handleOpenAddChargePoint={handleToggle}
        />
        {/*{total && total > 1 ? (*/}
        {/*  <Box p={1} display="flex" justifyContent="center">*/}
        {/*    <Pagination*/}
        {/*      page={page}*/}
        {/*      count={total}*/}
        {/*      onChange={handlePageChange}*/}
        {/*      variant="outlined"*/}
        {/*    />*/}
        {/*  </Box>*/}
        {/*) : null}*/}
        {/*{!isLoading ? (*/}
        {/*  <>*/}
        {/*    <Divider />*/}
        {/*    <Box p={1}>*/}
        {/*      <ArrowPagination*/}
        {/*        page={page}*/}
        {/*        hasNext={hasNextPage}*/}
        {/*        hasPrev={hasPrevPage}*/}
        {/*        renderFirstButton={(props) => (*/}
        {/*          <Button*/}
        {/*            variant="outlined"*/}
        {/*            startIcon={<FirstPage />}*/}
        {/*            {...props}*/}
        {/*          >*/}
        {/*            First page*/}
        {/*          </Button>*/}
        {/*        )}*/}
        {/*        renderPrevButton={(props) => (*/}
        {/*          <Button*/}
        {/*            variant="contained"*/}
        {/*            disableElevation*/}
        {/*            startIcon={<ArrowBack />}*/}
        {/*            {...props}*/}
        {/*          >*/}
        {/*            Prev page*/}
        {/*          </Button>*/}
        {/*        )}*/}
        {/*        renderNextButton={(props) => (*/}
        {/*          <Button*/}
        {/*            variant="contained"*/}
        {/*            color="primary"*/}
        {/*            disableElevation*/}
        {/*            endIcon={<ArrowForward />}*/}
        {/*            {...props}*/}
        {/*          >*/}
        {/*            Next page*/}
        {/*          </Button>*/}
        {/*        )}*/}
        {/*        onChange={(_, index) => handleChangePage(index)}*/}
        {/*      >*/}
        {/*        <Typography*/}
        {/*          variant="caption"*/}
        {/*          color="textSecondary"*/}
        {/*        >{`Page: ${page}`}</Typography>*/}
        {/*      </ArrowPagination>*/}
        {/*    </Box>*/}
        {/*  </>*/}
        {/*) : null}*/}
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
