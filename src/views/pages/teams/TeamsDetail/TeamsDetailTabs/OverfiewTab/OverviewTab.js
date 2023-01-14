import React, { useState } from 'react';
import MainCard from '../../../../../../ui-component/cards/MainCard';
import { ItemCardInfo } from '../../../../../../ui-component/cards/ItemCardInfo';
import {
  East,
  MoreVertOutlined,
  TrendingDown,
  TrendingUp,
} from '@mui/icons-material';
import { Box, Tab, Tabs } from '@mui/material';
import { useTheme } from '@mui/styles';
import Chart from 'react-apexcharts';
import { DropdownMenu } from '../../../../../../ui-component/extended/DropdownMenu';
import { OverviewTabChargePointsTable } from './OverviewTabChargePointsTable';

export const OverviewTab = () => {
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const series = [
    {
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
    },
  };
  return (
    <Box sx={{ display: 'flex', gap: '16px' }}>
      <Box>
        <Box sx={{ display: 'flex', gap: '16px', margin: '16px 0' }}>
          <MainCard
            sx={{ width: '100%' }}
            title={
              <ItemCardInfo
                title="Total charges (30 days)"
                titleVariant="caption2"
                bgColor={theme.palette.success.light}
                color={theme.palette.success.main}
                value="0"
                valueVariant="h2"
                additionalValue="+100%"
                img={<TrendingUp />}
              />
            }
            content={false}
          />
          <MainCard
            sx={{ width: '100%' }}
            title={
              <ItemCardInfo
                title="Daily charges"
                titleVariant="caption2"
                bgColor={theme.palette.error.light}
                color={theme.palette.error.main}
                value="0"
                valueVariant="h2"
                additionalValue="-100%"
                img={<TrendingDown />}
              />
            }
            content={false}
          />
          <MainCard
            sx={{ width: '100%' }}
            title={
              <ItemCardInfo
                title="Revenue USD (30 days)"
                titleVariant="caption2"
                value="0"
                valueVariant="h2"
                additionalValue="0%"
                img={<East />}
              />
            }
            content={false}
          />
        </Box>
        <Box>
          <MainCard
            sx={{ width: '100%' }}
            title={<ItemCardInfo title="Charge session" />}
            secondary={
              <Box>
                <Tabs value={currentTab} onChange={handleChange}>
                  <Tab label="Graph" />
                  <Tab label="Table" />
                </Tabs>
              </Box>
            }
          >
            {currentTab === 0 ? (
              <Chart
                options={options}
                series={series}
                type="line"
                width="100%"
              />
            ) : null}
            {currentTab === 1 ? (
              <OverviewTabChargePointsTable chargeSessions={[]} />
            ) : null}
          </MainCard>
        </Box>
      </Box>
      <Box sx={{ minWidth: '300px' }}>
        <MainCard sx={{ marginTop: '16px' }} title="Top Charge points (kWh)">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ItemCardInfo title="2222" value="1 charge" img={<East />} />
            <ItemCardInfo title="0" value="kWh" />
          </Box>
        </MainCard>
        <MainCard
          sx={{ marginTop: '16px' }}
          title={
            <ItemCardInfo title="Report activity" value="Total unsolved: 1" />
          }
          secondary="See all"
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <ItemCardInfo title="2222" value="1 charge" img={<East />} />
            <DropdownMenu icon={MoreVertOutlined} renderContent={() => '22'} />
          </Box>
        </MainCard>
      </Box>
    </Box>
  );
};
