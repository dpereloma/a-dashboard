import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { OverviewTab } from './OverfiewTab';
import { MembersTab } from './MembersTab';
import { ChargePointsTab } from './ChargePointsTab';
import { PriceGroupsTab } from './PriceGroupsTab/PriceGroupsTab';
import { SchedulesTab } from './SchedulesTab';
import { SettingsTab } from './SettingsTab';
import { TeamWalletTab } from './TeamWalletTab';
import MainCard from '../../../../../ui-component/cards/MainCard';

export const TeamsDetailTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    'Overview',
    'Charge points',
    'Members',
    'Team wallet',
    'Price groups',
    'Schedules',
    'Settings',
  ];

  const tabsContent = [
    <OverviewTab key="overview" />,
    <ChargePointsTab key="chargePoints" />,
    <MembersTab key="members" />,
    <TeamWalletTab key="teamsWallet" />,
    <PriceGroupsTab key="priceGroup" />,
    <SchedulesTab key="schedule" />,
    <SettingsTab key="settings" />,
  ];

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <MainCard
        sx={{ width: '100%', marginTop: '16px' }}
        title={
          <Tabs value={currentTab} onChange={handleChange}>
            {tabs.map((tab) => (
              <Tab key={tab} label={tab} />
            ))}
          </Tabs>
        }
        content={false}
      />
      {tabsContent[currentTab]}
    </>
  );
};
