import React from 'react';

import { MainCard } from 'ui-component/cards/MainCard';
import { SearchInput } from 'ui-component/inputs';
import { TeamsTable } from './TeamsTable';
import { Button } from 'ui-component/buttons/Button';

import { useTeams } from './Teams.utils';
import * as S from './Teams.styles';
import { useNavigate } from 'react-router-dom';

const Teams = () => {
  const navigate = useNavigate();

  const { teams, searchValue, onSearchChange, onSearchClear } = useTeams();

  const renderHeaderAction = () => (
    <Button onClick={() => navigate('/teams/create')} text="Add team" />
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
      <Button onClick={() => navigate('/teams/create')} text="Add team" />
    </S.ActionsWrapper>
  );

  return (
    <>
      <MainCard
        sx={{ marginTop: '16px' }}
        contentSX={{ padding: 0 }}
        title="Teams"
        secondary={renderAction()}
      >
        <TeamsTable teams={teams} />
      </MainCard>
    </>
  );
};

export default Teams;
