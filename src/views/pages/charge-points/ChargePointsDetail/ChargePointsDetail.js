import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box, Divider, MenuItem, TextField, Typography } from '@mui/material';
import { DropdownMenu } from 'ui-component/extended/DropdownMenu';
import MainCard from 'ui-component/cards/MainCard';
import { ProgressCard } from './ProgressCard';

import {
  Done,
  PowerOutlined,
  ShowChart,
  ArrowBackIos,
  ExpandMore,
} from '@mui/icons-material';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';

const status = [
  {
    value: 'today',
    label: 'Today',
  },
  {
    value: 'month',
    label: 'This Month',
  },
  {
    value: 'year',
    label: 'This Year',
  },
];

const ChargePointsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const chargePoints = useSelector((state) => state.chargePoints.chargePoints);

  const [value, setValue] = useState('today');

  const chargeItem = useMemo(() => {
    return chargePoints.find((item) => item.id === Number(id));
  }, [id, chargePoints]);

  const renderCardTitle = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <ArrowBackIos sx={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
      {`#${id} - ${chargeItem.name}`}
    </Box>
  );
  return (
    <>
      <MainCard title={renderCardTitle()} content={false} />
      <Box sx={{ display: 'flex', gap: '16px', margin: '16px 0' }}>
        <MainCard
          sx={{ width: '100%' }}
          title={<ItemCardInfo title="title1" value="value1" img={<Done />} />}
          content={false}
        />
        <MainCard
          sx={{ width: '100%' }}
          title={
            <ItemCardInfo
              title="title1"
              value="value1"
              img={<PowerOutlined />}
            />
          }
          content={false}
        />
        <MainCard
          sx={{ width: '100%' }}
          title={
            <ItemCardInfo title="title1" value="value1" img={<ShowChart />} />
          }
          content={false}
        />
      </Box>
      <MainCard
        title={
          <ItemCardInfo title="title1" value="value1" img={<PowerOutlined />} />
        }
        secondary={
          <TextField
            id="standard-select-currency"
            select
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            {status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        }
      >
        <Box
          sx={{
            display: 'flex',
            marginBottom: '16px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', gap: '80px' }}>
            <Box>
              <Typography sx={{ marginBottom: '8px' }} variant="subtitle2">
                Stability score
              </Typography>
              <Typography variant="h4">27%</Typography>
            </Box>
            <Box>
              <Typography sx={{ marginBottom: '8px' }} variant="subtitle2">
                Faired price
              </Typography>
              <Typography variant="h4">+</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '80px' }}>
            <DropdownMenu icon={ExpandMore} label="Overview" />
            <DropdownMenu icon={ExpandMore} label="Overview" />
          </Box>
        </Box>
        <Divider />
        <ProgressCard color="green" hours={13.4} percent={23.8} />
        <Divider />
        <ProgressCard color="blue" hours={22} percent={33.8} />
        <Divider />
        <ProgressCard color="orange" hours={80} percent={90} />
      </MainCard>
    </>
  );
};

export default ChargePointsDetail;
