import React from 'react';
import MainCard from '../../../../../../ui-component/cards/MainCard';
import { ItemCardInfo } from '../../../../../../ui-component/cards/ItemCardInfo';
import { Done, PowerOutlined, ShowChart } from '@mui/icons-material';
import { Box } from '@mui/material';

export const OverviewTab = () => {
  return (
    <div>
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
    </div>
  );
};
