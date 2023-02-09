import React from 'react';
import { ChargePointsFilter } from '../../../../charge-points/ChargePoints/ChargePointsFilter';
import { IconButton } from '@mui/material';
import * as S from '../../../../charge-points/ChargePoints/ChargePoints.styles';
import { SearchInput } from 'ui-component/inputs';
import { DropdownMenu } from 'ui-component/extended/DropdownMenu';
import { FilterList } from '@mui/icons-material';
import { MainCard } from 'ui-component/cards/MainCard';
import { useMembersTab } from './MembersTab.utils';
import { MembersTable } from './MembersTable';
// import { CreateMemberModal } from './CreateMemberModal';

export const MembersTab = ({ members }) => {
  const {
    filteredMembers,
    filterValues,
    searchValue,
    handleChange,
    onSearchChange,
    onSearchClear,
  } = useMembersTab(members);

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
        clearBtnText="Отменить"
        onChange={onSearchChange}
        onClear={onSearchClear}
      />
      <IconButton size="small">
        <DropdownMenu icon={FilterList} renderContent={renderFilterList} />
      </IconButton>
    </S.ActionsWrapper>
  );

  return (
    <>
      <MainCard
        sx={{ marginTop: '16px' }}
        contentSX={{ padding: 0 }}
        title="Team members"
        secondary={renderAction()}
      >
        <MembersTable members={filteredMembers} />
      </MainCard>
    </>
  );
};
