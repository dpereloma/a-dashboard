import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainCard from 'ui-component/cards/MainCard';
import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { Button } from 'ui-component/buttons/Button';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';

import {
  useChargePointsPartnerAssignMutation,
  useChargePointsSearchQuery,
} from 'features/charge-points/queries';
import { useAuth } from 'features/auth/hooks';

const CreateChargePoints = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const [searchValue, setSearchValue] = useState('');
  const { data, refetch } = useChargePointsSearchQuery(
    { deviceSn: searchValue, partnerSet: false },
    {
      enabled: !!searchValue,
    },
  );
  const assignMutation = useChargePointsPartnerAssignMutation();

  const renderHeaderAction = () => (
    <MenuItem sx={{ borderRadius: '8px' }} onClick={() => navigate(-1)}>
      Back
    </MenuItem>
  );
  console.log(data);

  const handleSearch = () => {
    refetch();
  };

  const handleAssignChargePoint = (chargePoint) => {
    assignMutation.mutate(
      {
        deviceId: chargePoint?.device?.deviceId,
        deviceSn: chargePoint?.device?.chargePointSerialNumber,
        partnerId: user.id,
      },
      {
        onSuccess: () => {
          navigate('/charge-points');
        },
      },
    );
  };

  return (
    <>
      {/*<MainCard*/}
      {/*  // title="Charge point create"*/}
      {/*  title="Search charge point"*/}
      {/*  secondary={renderHeaderAction()}*/}
      {/*  content={false}*/}
      {/*/>*/}
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <MainCard
          sx={{ width: '100%', marginTop: '16px' }}
          title={
            <Box sx={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <Typography sx={{ width: '300px' }} variant="h4">
                Search charge point
              </Typography>
              <TextField
                fullWidth
                size="large"
                value={searchValue}
                placeholder="Serial number"
                onChange={(e) => setSearchValue(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                type="text"
              />
              <Button onClick={handleSearch} size="large" text="Search" />
            </Box>
          }
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {data?.items?.map((chargePoint) => (
              <SubCard
                key={chargePoint.id}
                contentSX={{
                  padding: '8px',
                  '&:last-child': { padding: '8px' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography>
                    {chargePoint?.device?.chargePointModel}
                  </Typography>
                  <Typography>
                    {chargePoint?.device?.chargePointSerialNumber}
                  </Typography>
                  <AnimateButton>
                    <Button
                      text="Add"
                      onClick={() => handleAssignChargePoint(chargePoint)}
                    />
                  </AnimateButton>
                </Box>
              </SubCard>
            ))}
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
