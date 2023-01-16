import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Box,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { DetailPageMenu } from '../../../../ui-component/cards/DetailPageMenu';
import { CreateSubscriptionModal } from '../../teams/TeamsDetail/TeamsDetailTabs/SettingsTab/CreateSubscriptionModal';
import { Button } from 'ui-component/buttons/Button';

import {
  ArrowBackIos,
  TextSnippet,
  CompareArrows,
  PersonAddAlt1,
  KeyboardArrowRight,
} from '@mui/icons-material';
import * as S from '../../teams/TeamsDetail/TeamsDetailTabs/InviteMemberModal/InviteMemberModal.styles';

const ChargingSitesDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const chargingSites = useSelector(
    (state) => state.chargingSites.chargingSites,
  );

  const [openApplySubscription, setOpenApplySubscription] = useState(false);
  const [plan, setPlan] = React.useState('');

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

  const menuItems = [
    {
      icon: <CompareArrows />,
      text: 'Overview',
    },
    {
      icon: <TextSnippet />,
      text: 'Charge point settings',
    },
    {
      icon: <TextSnippet />,
      text: 'Charge sessions',
    },
    {
      icon: <TextSnippet />,
      text: 'Subscriptions',
    },
    {
      icon: <TextSnippet />,
      text: 'Charge point functionalities',
    },
    {
      icon: <TextSnippet />,
      text: 'Connection',
    },
    {
      icon: <TextSnippet />,
      text: 'Deeplink',
    },
  ];

  const chargingSiteItem = useMemo(() => {
    return chargingSites.find((item) => item.id === Number(id));
  }, [id, chargingSites]);

  const renderCardTitle = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <ArrowBackIos sx={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
      {`#${id} - ${chargingSiteItem.name}`}
    </Box>
  );
  return (
    <>
      <MainCard title={renderCardTitle()} content={false} />
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <Box sx={{ flexGrow: 1 }}>
          <MainCard
            sx={{ width: '100%', marginTop: '16px' }}
            title={<ItemCardInfo title="Settings" img={<TextSnippet />} />}
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
                      <Typography variant="subtitle1">
                        #233213 | eeadfdd
                      </Typography>
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
            <Button size="large" text="Savr changes" />
          </MainCard>
          <MainCard
            sx={{ width: '100%', marginTop: '16px' }}
            content={false}
            title={
              <ItemCardInfo
                title={plan || 'No subscriptions'}
                value="Next purchase: -"
                img={<TextSnippet />}
              />
            }
            secondary={
              <Button
                size="large"
                onClick={() => setOpenApplySubscription(true)}
                text="Apply subscription"
              />
            }
          />
          <MainCard
            sx={{ width: '100%', marginTop: '16px' }}
            title={
              <ItemCardInfo
                title="Charge point functionalities"
                value="Last updated: -"
                img={<TextSnippet />}
              />
            }
          >
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ minWidth: '150px' }} variant="subtitle1">
                Functionalities
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
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
                    <Typography variant="subtitle1">
                      Accessibility settings
                    </Typography>
                    <Typography variant="body1">
                      Set your charge point to public, private or scheduled
                      accessibility
                    </Typography>
                    <S.CardItem>
                      <S.Icon>
                        <PersonAddAlt1 />
                      </S.Icon>
                      <Box>
                        <Typography variant="subtitle1">Public</Typography>
                        <Typography variant="caption">
                          Master pricing: 23131
                        </Typography>
                        <Typography variant="caption">US$0.00/kWh</Typography>
                      </Box>
                      <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
                        <Button size="large" text="Edit" />
                      </Box>
                    </S.CardItem>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">Reservation</Typography>
                    <Typography variant="body1">
                      Enable reservation to let users reserve your charge point.
                      You are able to set a maximum amount of minutes that users
                      can reserve the charge point.
                    </Typography>
                    <S.CardItem>
                      <S.Icon>
                        <PersonAddAlt1 />
                      </S.Icon>
                      <Box>
                        <Typography variant="subtitle1">Reservation</Typography>
                        <Typography variant="caption">
                          Max 10 minutes
                        </Typography>
                      </Box>
                      <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
                        <Button size="large" text="Edit" />
                      </Box>
                    </S.CardItem>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">Cost</Typography>
                    <Typography variant="body1">
                      Add a cost metric to the charge point and track the actual
                      cost of changing
                    </Typography>
                    <S.CardItem>
                      <S.Icon>
                        <PersonAddAlt1 />
                      </S.Icon>
                      <Box>
                        <Typography variant="subtitle1">Cost</Typography>
                      </Box>
                      <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
                        <Button size="large" text="Enable" />
                      </Box>
                    </S.CardItem>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">Look Cable</Typography>
                    <Typography variant="body1">
                      When enabled, the cable will be locked to the charge point
                    </Typography>
                    <S.CardItem>
                      <S.Icon>
                        <PersonAddAlt1 />
                      </S.Icon>
                      <Box>
                        <Typography variant="subtitle1">Lock Cable</Typography>
                        <Typography variant="caption">
                          Lock cable is not available for this charge point
                          model
                        </Typography>
                      </Box>
                      <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
                        <Switch checked={false} name="sgr" size="small" />
                      </Box>
                    </S.CardItem>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">In-app chat</Typography>
                    <Typography variant="body1">
                      Allow users charging on the charge point to contact you
                      via app
                    </Typography>
                    <S.CardItem>
                      <S.Icon>
                        <PersonAddAlt1 />
                      </S.Icon>
                      <Box>
                        <Typography variant="subtitle1">In-app chat</Typography>
                        <Typography variant="caption">
                          Contact via app
                        </Typography>
                      </Box>
                      <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
                        <Switch checked={true} name="sgr" size="small" />
                      </Box>
                    </S.CardItem>
                  </Box>
                </Box>
              </Box>
            </Box>
          </MainCard>
          <MainCard
            sx={{ width: '100%', marginTop: '16px' }}
            title={
              <ItemCardInfo
                title="Connected"
                value="Last connected: -"
                img={<TextSnippet />}
              />
            }
          >
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ minWidth: '150px' }} variant="subtitle1">
                Connection
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
                    <Typography>Integration ID</Typography>
                    <TextField
                      name="id"
                      size="small"
                      fullWidth
                      type="text"
                      value="213131"
                    />
                  </Box>
                  <Box>
                    <Typography>Serial number</Typography>
                    <TextField
                      name="serialNumber"
                      size="small"
                      fullWidth
                      type="text"
                      value="SDSD33424SD"
                    />
                  </Box>
                  <Box>
                    <Typography>Connector ID</Typography>
                    <TextField
                      name="connectorId"
                      size="small"
                      fullWidth
                      type="text"
                      value="2"
                    />
                  </Box>
                  <Box>
                    <Typography>OCPP</Typography>
                    <TextField
                      name="ocpp"
                      size="small"
                      fullWidth
                      type="text"
                      value="Yes"
                    />
                  </Box>
                  <Box>
                    <Typography>Firmware version</Typography>
                    <TextField
                      name="version"
                      size="small"
                      fullWidth
                      type="text"
                      value="0.9.87"
                    />
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
                    Your charge point connection
                  </Typography>
                  <Typography variant="body1">
                    Here you can find details about the charge point connection,
                    and delete or add a new connection
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body1">Create at:</Typography>
                      <Typography variant="subtitle1">
                        Nov 17 2022, 15:33
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">Last connected:</Typography>
                      <Typography variant="subtitle1">
                        Nov 17 2022, 15:33
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">Updated:</Typography>
                      <Typography variant="subtitle1">
                        Nov 17 2022, 15:33
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">Status:</Typography>
                      <Typography variant="subtitle1">disconnected</Typography>
                    </li>
                    <li>
                      <Typography variant="body1">Status:</Typography>
                      <Typography variant="subtitle1">Unavailable</Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Connector available:
                      </Typography>
                      <Typography variant="subtitle1">No</Typography>
                    </li>
                    <li>
                      <Typography variant="body1">MID:</Typography>
                      <Typography variant="subtitle1">No</Typography>
                    </li>
                    <li>
                      <Typography variant="body1">Meter accuracy:</Typography>
                      <Typography variant="subtitle1">None</Typography>
                    </li>
                    <li>
                      <Typography variant="body1">Cell strength</Typography>
                      <Typography variant="subtitle1">-</Typography>
                    </li>
                    <li>
                      <Typography variant="body1">Wi-fi strength:</Typography>
                      <Typography variant="subtitle1">-</Typography>
                    </li>
                    <li>
                      <Typography variant="body1">Cable lock:</Typography>
                      <Typography variant="subtitle1">No</Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Free charging mode
                      </Typography>
                      <Typography variant="subtitle1">No</Typography>
                    </li>
                    <li>
                      <Typography variant="body1">View logs</Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        View local charge keys
                      </Typography>
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
            <Button size="large" text="Update integration" />
          </MainCard>
        </Box>
        <DetailPageMenu menuItems={menuItems} />
        <CreateSubscriptionModal
          isOpen={openApplySubscription}
          onClose={() => setOpenApplySubscription(false)}
          setPlan={setPlan}
        />
      </Box>
    </>
  );
};

export default ChargingSitesDetail;
