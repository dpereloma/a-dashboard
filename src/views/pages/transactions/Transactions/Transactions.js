import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useChargePoints } from '../../charge-points/ChargePoints/ChargePoints.utils';
import { ChargePointsFilter } from '../../charge-points/ChargePoints/ChargePointsFilter';
import * as S from '../../charge-points/ChargePoints/ChargePoints.styles';
import { SearchInput } from '../../../../ui-component/inputs';
import {
  Box,
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from '@mui/material';
import { DropdownMenu } from '../../../../ui-component/extended/DropdownMenu';
import {
  ArrowBack,
  ArrowForward,
  FilterList,
  FirstPage,
} from '@mui/icons-material';
import { Button } from '../../../../ui-component/buttons/Button';
import { MainCard } from '../../../../ui-component/cards/MainCard';
import { ChargePointsTable } from '../../charge-points/ChargePoints/ChargePointsTable';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { useTransactions } from './Transactions.utils';
import { ArrowPagination } from '../../../../ui-component/ArrowPagination';
import { TransactionsTable } from '../../charge-points/ChargePointsDetail/Transactions/TransactionsTable';

const Transactions = () => {
  const navigate = useNavigate();

  const {
    filteredChargePoints,
    filterValues,
    searchValue,
    open,
    isLoading,
    error,
    page,
    hasNextPage,
    hasPrevPage,
    handleChangePage,
    handleChange,
    handleToggle,
    onSearchChange,
    onSearchClear,
  } = useTransactions();

  const renderAction = () => (
    <S.ActionsWrapper>
      <SearchInput
        value={searchValue}
        placeholder="Search"
        clearBtnText="Cancel"
        onChange={onSearchChange}
        onClear={onSearchClear}
      />
    </S.ActionsWrapper>
  );

  return (
    <>
      <MainCard
        sx={{ marginTop: '16px' }}
        contentSX={{ padding: 0 }}
        title="Transactions"
        // secondary={renderAction()}
      >
        {isLoading ? (
          <Box p={2} display="flex" alignItems="center" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : null}
        {!!error ? (
          <Typography variant="body2">{error?.message}</Typography>
        ) : null}
        <TransactionsTable transactions={filteredChargePoints} />
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
        {!isLoading ? (
          <>
            <Divider />
            <Box p={1}>
              <ArrowPagination
                page={page}
                hasNext={hasNextPage}
                hasPrev={hasPrevPage}
                renderFirstButton={(props) => (
                  <Button
                    variant="outlined"
                    startIcon={<FirstPage />}
                    textColor="primary"
                    {...props}
                  >
                    First page
                  </Button>
                )}
                renderPrevButton={(props) => (
                  <Button
                    variant="contained"
                    disableElevation
                    startIcon={<ArrowBack />}
                    {...props}
                  >
                    Prev page
                  </Button>
                )}
                renderNextButton={(props) => (
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    endIcon={<ArrowForward />}
                    {...props}
                  >
                    Next page
                  </Button>
                )}
                onChange={(_, index) => handleChangePage(index)}
              >
                <Typography
                  variant="caption"
                  color="textSecondary"
                >{`Page: ${page}`}</Typography>
              </ArrowPagination>
            </Box>
          </>
        ) : null}
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

export default Transactions;
