import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MainCard } from 'ui-component/cards/MainCard';
import {
  Box,
  DialogActions,
  DialogContent,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Button } from 'ui-component/buttons/Button';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';

import {
  useChargePointsPartnerAssignMutation,
  useChargePointsSearchQuery,
  useChargePointsPartnerItemsQuery,
} from 'features/charge-points/queries';
import { useAuth } from 'features/auth/hooks';
import { EdgeDialog } from 'ui-component/EdgeDialog';
import { useTheme } from '@mui/styles';

const searchParams = [
  {
    value: 'deviceSn',
    label: 'Serial number',
  },
  {
    value: 'name',
    label: 'Name',
  },
];

const CreateChargePoints = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const { user } = useAuth();

  const { data: chargePointPartner } = useChargePointsPartnerItemsQuery(
    user?.id,
  );

  const [searchValue, setSearchValue] = useState('');
  const [selectedSearchParam, setSelectedSearchParam] = useState(
    searchParams[0].value,
  );
  const [selectedChargePoint, setSelectedChargePoint] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);
  const { data, refetch } = useChargePointsSearchQuery(
    { [selectedSearchParam]: searchValue || undefined, partnerSet: false },
    {
      enabled: !!searchValue,
    },
  );
  const assignMutation = useChargePointsPartnerAssignMutation();

  const handleSearch = () => {
    refetch();
  };

  const handleAssignChargePoint = (chargePoint) => {
    assignMutation.mutate(
      {
        deviceId: chargePoint?.device?.deviceId,
        deviceSn: chargePoint?.device?.chargePointSerialNumber,
        partnerId: chargePointPartner?.id,
      },
      {
        onSuccess: () => {
          navigate('/charge-points');
        },
      },
    );
  };

  const handleChangeSearchParam = (e) => {
    setSelectedSearchParam(e.target.value);
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
                placeholder={
                  selectedSearchParam === 'deviceSn' ? 'Serial number' : 'Name'
                }
                onChange={(e) => setSearchValue(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                type="text"
              />
              <Select
                defaultValue="Serial number"
                size="large"
                name={name}
                value={selectedSearchParam}
                onChange={handleChangeSearchParam}
                SelectProps={{
                  native: true,
                }}
              >
                {searchParams.map(({ value, label }) => (
                  <MenuItem key={label} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
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
                      onClick={() => {
                        setSelectedChargePoint(chargePoint);
                        setOpenConfirm(true);
                      }}
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
      <EdgeDialog
        open={openConfirm}
        title="Confirm addition charge point"
        onClose={() => setOpenConfirm(false)}
      >
        <DialogContent>
          <Box sx={{ padding: '8px 0' }}>
            <Typography variant="h4">
              Are you sure you want to add charge point?
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenConfirm(false)}
            variant="outlined"
            textColor={theme.palette?.primary[200]}
            fullWidth
            text="Cancel"
          />
          <Button
            onClick={() => handleAssignChargePoint(selectedChargePoint)}
            fullWidth
            text="Add"
          />
        </DialogActions>
      </EdgeDialog>
    </>
  );
};

export default CreateChargePoints;
