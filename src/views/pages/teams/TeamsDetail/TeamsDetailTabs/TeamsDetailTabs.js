import React, { useState } from 'react';

import { Box, Tab, Tabs } from '@mui/material';
import { OverviewTab } from './OverfiewTab';
import { MembersTab } from './MembersTab';
import { ChargePointsTab } from './ChargePointsTab';
import { PriceGroupsTab } from './PriceGroupsTab/PriceGroupsTab';
import { SchedulesTab } from './SchedulesTab';
import { SettingsTab } from './SettingsTab';
import { TeamWalletTab } from './TeamWalletTab';
import { MainCard } from 'ui-component/cards/MainCard';
import { CreateMemberModal } from './MembersTab/CreateMemberModal';
import { InviteMemberModal } from './InviteMemberModal';
import { Button } from 'ui-component/buttons/Button';

export const TeamsDetailTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [members, setMembers] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openInviteModal, setOpenInviteModal] = useState(false);

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
    <MembersTab key="members" members={members} />,
    <TeamWalletTab key="teamsWallet" />,
    <PriceGroupsTab key="priceGroup" />,
    <SchedulesTab key="schedule" />,
    <SettingsTab key="settings" />,
  ];

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const renderTabs = () => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Tabs value={currentTab} onChange={handleChange}>
        {tabs.map((tab) => (
          <Tab key={tab} label={tab} />
        ))}
      </Tabs>
      {currentTab === 2 ? (
        <Button
          text="Invite new members"
          onClick={() => setOpenInviteModal(true)}
        />
      ) : null}
      {currentTab === 3 ? <Button text="Wallet actions" /> : null}
    </Box>
  );

  return (
    <>
      <MainCard
        sx={{ width: '100%', marginTop: '16px' }}
        title={renderTabs()}
        content={false}
      />
      {tabsContent[currentTab]}
      <CreateMemberModal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        setMembers={setMembers}
      />
      <InviteMemberModal
        isOpen={openInviteModal}
        onClose={() => setOpenInviteModal(false)}
      />
    </>
  );
};
