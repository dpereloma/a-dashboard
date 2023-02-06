import React from 'react';

import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Button } from 'ui-component/buttons/Button';
import MainCard from 'ui-component/cards/MainCard';

import * as S from '../../../teams/TeamsDetail/TeamsDetailTabs/InviteMemberModal/InviteMemberModal.styles';
import {
  KeyboardArrowRight,
  PersonAddAlt1,
  Settings,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { MenuItemsIds } from '../ChargePointsDetail.types';

export const ChargePointSettings = () => {
  const chargingSites = useSelector(
    (state) => state.chargingSites.chargingSites,
  );

  const chargeTypeItems = [
    {
      value: 'ac',
      label: 'AC',
    },
    {
      value: 'dc',
      label: 'DC',
    },
  ];

  const connectorItems = [
    {
      value: 'type1',
      label: 'Type1',
    },
    {
      value: 'type2',
      label: 'Type2',
    },
  ];

  return (
    <MainCard
      id={MenuItemsIds.SETTINGS}
      title={<ItemCardInfo title="Settings" img={<Settings />} />}
    >
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ minWidth: '150px' }} variant="subtitle1">
          Settings
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            gap: '24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              flexBasis: '100%',
            }}
          >
            <Box>
              <Typography>Name</Typography>
              <TextField
                name="id"
                size="small"
                fullWidth
                type="text"
                value="wqeqe"
              />
            </Box>
            <Box>
              <Typography>Charging sites</Typography>
              <Select
                fullWidth
                size="small"
                SelectProps={{
                  native: true,
                }}
              >
                {chargingSites.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box>
              <Typography>Location</Typography>
              <TextField
                name="serialNumber"
                size="small"
                fullWidth
                type="text"
                value="address"
              />
            </Box>
            <Box>
              <Typography>Charging type (AC/DC)</Typography>
              <Select
                fullWidth
                size="small"
                SelectProps={{
                  native: true,
                }}
              >
                {chargeTypeItems.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box>
              <Typography>Connector</Typography>
              <Select
                fullWidth
                size="small"
                SelectProps={{
                  native: true,
                }}
              >
                {connectorItems.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box>
              <Typography>Max KW</Typography>
              <TextField
                name="connectorId"
                size="small"
                fullWidth
                type="text"
                value="2"
              />
            </Box>
            <Box>
              <Typography>Charge point owner</Typography>
              <S.CardItem>
                <S.Icon>
                  <PersonAddAlt1 />
                </S.Icon>
                <Box>
                  <Typography variant="subtitle1">User #85849</Typography>
                  <Typography variant="caption">Id: 75848</Typography>
                </Box>
              </S.CardItem>
            </Box>
            <Box>
              <Typography>Team</Typography>
              <S.CardItem>
                <S.Icon>
                  <PersonAddAlt1 />
                </S.Icon>
                <Box>
                  <Typography variant="subtitle1">Dfdf</Typography>
                  <Typography variant="caption">ID: 33242</Typography>
                </Box>
                <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
                  <KeyboardArrowRight />
                </Box>
              </S.CardItem>
            </Box>
            <Box>
              <Typography>Charging sites</Typography>
              <S.CardItem>
                <S.Icon>
                  <PersonAddAlt1 />
                </S.Icon>
                <Box>
                  <Typography variant="subtitle1">Test</Typography>
                  <Typography variant="caption">ID: 23131</Typography>
                </Box>
                <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
                  <KeyboardArrowRight />
                </Box>
              </S.CardItem>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              flexBasis: '100%',
            }}
          >
            <Typography variant="subtitle1">
              Charge point information
            </Typography>
            <Typography variant="body1">
              Here you can find details about the charge point
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">Charge point</Typography>
                <Typography variant="subtitle1">233213</Typography>
              </li>
              <li>
                <Typography variant="body1">Identifier</Typography>
                <Typography variant="subtitle1">#233213 | eeadfdd</Typography>
              </li>
              <li>
                <Typography variant="body1">Brand & Model</Typography>
                <Typography variant="subtitle1">ABB - Basic</Typography>
              </li>
              <li>
                <Typography variant="body1">Location</Typography>
                <Typography variant="subtitle1">Russia</Typography>
              </li>
              <li>
                <Typography variant="body1">Created at</Typography>
                <Typography variant="subtitle1">Nov 14 2022</Typography>
              </li>
              <li>
                <Typography variant="body1">Updated at</Typography>
                <Typography variant="subtitle1">Nov 14 2022</Typography>
              </li>
              <li>
                <Typography variant="body1">Active at</Typography>
                <Typography variant="subtitle1">Nov 12 2022</Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Button size="large" text="Save changes" />
    </MainCard>
  );
};
