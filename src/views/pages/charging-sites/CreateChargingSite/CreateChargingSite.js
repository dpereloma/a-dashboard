import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, MenuItem } from '@mui/material';
import { MainCard } from 'ui-component/cards/MainCard';
import { CreateChargingSiteForm } from './CreateChargingSiteForm';

const CreateChargingSite = () => {
  const navigate = useNavigate();

  const renderHeaderAction = () => (
    <MenuItem sx={{ borderRadius: '8px' }} onClick={() => navigate(-1)}>
      Back
    </MenuItem>
  );

  return (
    <>
      <MainCard
        title="Charging site create"
        secondary={renderHeaderAction()}
        content={false}
      />
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <MainCard
          sx={{ width: '100%', marginTop: '16px' }}
          title="Charging site information"
        >
          <CreateChargingSiteForm />
        </MainCard>
        <MainCard sx={{ width: '100%', marginTop: '16px' }} title="Info">
          <div>111</div>
        </MainCard>
      </Box>
    </>
  );
};

export default CreateChargingSite;
