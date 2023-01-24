import React from 'react';
import { useNavigate } from 'react-router-dom';

import MainCard from 'ui-component/cards/MainCard';
import { SearchInput } from 'ui-component/inputs';
import { ChargingSitesTable } from './ChargingSitesTable';
import { Button } from 'ui-component/buttons/Button';

import * as S from './ChargingSites.styles';
import { useChargingSites } from './ChargingSites.utils';

const ChargingSites = () => {
  const navigate = useNavigate();

  const { chargingSites, searchValue, onSearchChange, onSearchClear } =
    useChargingSites();

  const renderHeaderAction = () => (
    <Button text="Add new" onClick={() => navigate('/charging-sites/create')} />
  );

  const renderAction = () => (
    <S.ActionsWrapper>
      <SearchInput
        value={searchValue}
        placeholder="Search"
        clearBtnText="Cancel"
        onChange={onSearchChange}
        onClear={onSearchClear}
      />
    </S.ActionsWrapper>
  );

  return (
    <>
      <MainCard
        title="Charging sites"
        secondary={renderHeaderAction()}
        content={false}
      />
      <MainCard
        sx={{ marginTop: '16px' }}
        contentSX={{ padding: 0 }}
        title=" "
        secondary={renderAction()}
      >
        <ChargingSitesTable chargingSites={chargingSites} />
      </MainCard>
    </>
  );
};

export default ChargingSites;
