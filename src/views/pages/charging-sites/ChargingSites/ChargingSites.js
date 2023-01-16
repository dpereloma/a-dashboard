import React, { useState } from 'react';

import { Button } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { SearchInput } from 'ui-component/inputs';

import * as S from './ChargingSites.styles';
import { useChargingSites } from './ChargingSites.utils';
import { ChargingSitesTable } from './ChargingSitesTable';
import { CreateChargingSiteForm } from './ChargingSitesModal/CreateChargingSiteForm';
import { ChargingSitesModal } from './ChargingSitesModal';

const ChargingSites = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const { chargingSites, searchValue, onSearchChange, onSearchClear } =
    useChargingSites();

  const renderHeaderAction = () => (
    <Button
      disableElevation
      variant="contained"
      size="medium"
      sx={{ color: 'white' }}
      onClick={() => setOpenCreateModal(true)}
    >
      Add new
    </Button>
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
        title="Your teams"
        secondary={renderAction()}
      >
        <ChargingSitesTable chargingSites={chargingSites} />
      </MainCard>
      <ChargingSitesModal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
      />
    </>
  );
};

export default ChargingSites;
