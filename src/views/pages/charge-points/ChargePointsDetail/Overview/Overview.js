import React, { useState } from 'react';
import {
  Box,
  Divider,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import MainCard from '../../../../../ui-component/cards/MainCard';
import { ItemCardInfo } from '../../../../../ui-component/cards/ItemCardInfo';
import {
  Done,
  ExpandMore,
  PowerOutlined,
  ShowChart,
} from '@mui/icons-material';
import { DropdownMenu } from '../../../../../ui-component/extended/DropdownMenu';
import { ProgressCard } from '../ProgressCard';
import { MenuItemsIds } from '../ChargePointsDetail.types';

export const Overview = () => {
  const [value, setValue] = useState('today');

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

  return (
    <Box id={MenuItemsIds.OVERVIEW}>
      <Stack direction="row" spacing={2} mt={2} mb={2}>
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
      </Stack>
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
        <Stack divider={<Divider />}>
          <ProgressCard color="green" hours={13.4} percent={23.8} />
          <ProgressCard color="blue" hours={22} percent={33.8} />
          <ProgressCard color="orange" hours={80} percent={90} />
        </Stack>
      </MainCard>
    </Box>
  );
};
