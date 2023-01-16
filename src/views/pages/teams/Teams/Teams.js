import React, { useState } from 'react';

import MainCard from 'ui-component/cards/MainCard';
import { SearchInput } from 'ui-component/inputs';
import { TeamsTable } from './TeamsTable';
import { CreateTeamModal } from './CreateTeamModal';
import { Button } from 'ui-component/buttons/Button';

import { useTeams } from './Teams.utils';
import * as S from './Teams.styles';

const Teams = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const { teams, searchValue, onSearchChange, onSearchClear } = useTeams();

  const renderHeaderAction = () => (
    <Button onClick={() => setOpenCreateModal(true)} text="Add team" />
  );

  const renderAction = () => (
    <S.ActionsWrapper>
      <SearchInput
        value={searchValue}
        placeholder="Поиск"
        clearBtnText="Отменить"
        onChange={onSearchChange}
        onClear={onSearchClear}
      />
    </S.ActionsWrapper>
  );

  return (
    <>
      <MainCard
        title="Teams"
        secondary={renderHeaderAction()}
        content={false}
      />
      <MainCard
        sx={{ marginTop: '16px' }}
        contentSX={{ padding: 0 }}
        title="Your teams"
        secondary={renderAction()}
      >
        <TeamsTable teams={teams} />
      </MainCard>
      <CreateTeamModal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
      />
    </>
  );
};

export default Teams;
