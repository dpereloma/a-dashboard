import React, { Fragment } from 'react';
import { MainCard } from 'ui-component/cards/MainCard';
import {
  Box,
  CircularProgress,
  Grid,
  MenuItem,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router';
import { useTransactionQuery } from 'features/transactions/queries';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const TransactionsDetail = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { data, isLoading, error } = useTransactionQuery(id);

  const transactionDetails = [
    {
      label: 'Status',
      value: data?.authStatus ?? '-',
    },
    {
      label: 'Energy, W',
      value: data?.energyW ?? '-',
    },
    {
      label: 'Started at',
      value: data?.startAt
        ? format(new Date(data?.startAt), 'dd.MM.yyyy HH:mm')
        : '-',
    },
    {
      label: 'Stopped at',
      value: data?.stopAt
        ? format(new Date(data?.stopAt), 'dd.MM.yyyy HH:mm')
        : '-',
    },
    {
      label: 'Tag',
      value: data?.tag ?? '-',
    },
    {
      label: 'Price',
      value: data?.details?.tariff
        ? `${data?.details?.tariff?.price} ${data?.details?.tariff?.currency}`
        : '-',
    },
  ];

  const renderHeaderAction = () => (
    <MenuItem sx={{ borderRadius: '8px' }} onClick={() => navigate(-1)}>
      Back
    </MenuItem>
  );

  if (isLoading) {
    return (
      <Box p={2} display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (!!error) {
    return <Typography variant="body2">err</Typography>;
  }

  return (
    <MainCard title="Transaction" secondary={renderHeaderAction()}>
      <Grid container spacing={2}>
        {transactionDetails.map(({ label, value }) => (
          <Fragment key={label}>
            <Grid style={{ alignSelf: 'center' }} item md={3}>
              <Typography variant="subtitle1">{label}</Typography>
            </Grid>
            <Grid item md={9}>
              <Typography>{value}</Typography>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </MainCard>
  );
};

export default TransactionsDetail;
