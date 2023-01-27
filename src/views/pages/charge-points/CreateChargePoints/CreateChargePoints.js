import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainCard from 'ui-component/cards/MainCard';
import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { CreateChargePointForm } from './CreateChargePointForm';
import { Button } from '../../../../ui-component/buttons/Button';
import SubCard from '../../../../ui-component/cards/SubCard';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';

const CreateChargePoints = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState();

  const renderHeaderAction = () => (
    <MenuItem sx={{ borderRadius: '8px' }} onClick={() => navigate(-1)}>
      Back
    </MenuItem>
  );

  return (
    <>
      <MainCard
        // title="Charge point create"
        title="Search charge point"
        secondary={renderHeaderAction()}
        content={false}
      />
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <MainCard
          sx={{ width: '100%', marginTop: '16px' }}
          title={
            <Box sx={{ display: 'flex', gap: '24px' }}>
              <TextField
                fullWidth
                size="large"
                value={searchValue}
                placeholder="SN"
                onChange={(e) => setSearchValue(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                type="text"
              />
              <Button size="large" text="Search" />
            </Box>
          }
        >
          <Box>
            <SubCard
              contentSX={{ padding: '8px', '&:last-child': { padding: '8px' } }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography>SN</Typography>
                <AnimateButton>
                  <Button text="Add" />
                </AnimateButton>
              </Box>
            </SubCard>
          </Box>
        </MainCard>
        {/*<MainCard*/}
        {/*  sx={{ width: '100%', marginTop: '16px' }}*/}
        {/*  title="Charge point information"*/}
        {/*>*/}
        {/*  <CreateChargePointForm />*/}
        {/*</MainCard>*/}
        {/*<MainCard sx={{ width: '100%', marginTop: '16px' }} title="Info">*/}
        {/*  <div>111</div>*/}
        {/*</MainCard>*/}
      </Box>
    </>
  );
};

export default CreateChargePoints;
