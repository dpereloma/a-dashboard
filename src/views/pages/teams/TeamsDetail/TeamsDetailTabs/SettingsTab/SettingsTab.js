import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import MainCard from '../../../../../../ui-component/cards/MainCard';
import { ItemCardInfo } from '../../../../../../ui-component/cards/ItemCardInfo';
import {
  CheckCircleOutlined,
  Clear,
  CompareArrows,
  HeadsetMic,
  TextSnippet,
  TrendingUp,
} from '@mui/icons-material';
import { DetailPageMenu } from '../../../../../../ui-component/cards/DetailPageMenu';
import { useTheme } from '@mui/styles';
import { Chip } from '../../../../../../ui-component/Chip';
import { CreateSubscriptionModal } from './CreateSubscriptionModal';

export const SettingsTab = ({ team }) => {
  const theme = useTheme();

  const [openApplySubscription, setOpenApplySubscription] = useState(false);
  const [plan, setPlan] = React.useState('');
  console.log(plan);

  const menuItems = [
    {
      icon: <CompareArrows />,
      text: 'Team information',
    },
    {
      icon: <TextSnippet />,
      text: 'Bank accounts',
    },
    {
      icon: <TextSnippet />,
      text: 'Support',
    },
    {
      icon: <TextSnippet />,
      text: 'Installer settings',
    },
    {
      icon: <TextSnippet />,
      text: 'Subscriptions',
    },
    {
      icon: <TextSnippet />,
      text: 'Other settings',
    },
  ];

  const basicInfoItems = [
    {
      title: 'Invoices',
      value: 'Plan',
      img: <TrendingUp />,
    },
    {
      title: 'US$0.00',
      value: 'Price/Charge Point',
    },
    {
      title: '0 Total',
      value: 'Charge Points',
    },
    {
      title: '-',
      value: 'Next payment',
    },
    {
      title: '10%',
      value: 'Transaction fee',
    },
    {
      title: 'US$0.00/kWh',
      value: 'Transaction fee',
    },
    {
      title: '10%',
      value: 'Transaction fee roaming',
    },
    {
      title: 'Monthly',
      value: 'Invoice period',
    },
  ];

  const successSettingsItems = [
    {
      label: 'Dedicated success manager',
      value: <Clear sx={{ fill: '#D12323' }} />,
    },
    {
      label: 'Managed teams',
      value: <Clear sx={{ fill: '#D12323' }} />,
    },
  ];

  const supportSettingsItems = [
    {
      label: 'Support mail',
      value: <Typography variant="subtitle1">support@monta.com</Typography>,
    },
    {
      label: 'App & Portalchat',
      value: <CheckCircleOutlined sx={{ fill: '#66d123' }} />,
    },
    {
      label: 'Chat',
      value: <Typography variant="subtitle1">Intercom</Typography>,
    },
    {
      label: 'Phone',
      value: <Typography variant="subtitle1">-</Typography>,
    },
    {
      label: 'Priority support',
      value: <Clear sx={{ fill: '#D12323' }} />,
    },
    {
      label: '24/7 support',
      value: <Clear sx={{ fill: '#D12323' }} />,
    },
    {
      label: 'End customer support phone',
      value: <Clear sx={{ fill: '#D12323' }} />,
    },
    {
      label: 'User report assigned to Monta',
      value: <CheckCircleOutlined sx={{ fill: '#66d123' }} />,
    },
    {
      label: 'Report actions',
      value: <CheckCircleOutlined sx={{ fill: '#66d123' }} />,
    },
    {
      label: 'App & Portalchat',
      value: <CheckCircleOutlined sx={{ fill: '#66d123' }} />,
    },
  ];

  return (
    <Box sx={{ display: 'flex', gap: '16px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <MainCard
          sx={{ width: '100%', marginTop: '16px' }}
          content={false}
          title={
            <Box sx={{ display: 'flex', gap: '70px', flexWrap: 'wrap' }}>
              {basicInfoItems.map(({ title, value, img }) => (
                <ItemCardInfo
                  key={title + value}
                  title={title}
                  titleVariant="subtitle1"
                  value={value}
                  valueVariant="caption"
                  img={img ?? undefined}
                />
              ))}
            </Box>
          }
        />
        <MainCard
          sx={{ width: '100%', marginTop: '16px' }}
          title={
            <ItemCardInfo
              title="Personal"
              value="user-909-8911"
              valueVariant="caption"
              img={team?.avatar || team?.name?.[0] || 'P'}
            />
          }
        >
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ minWidth: '150px' }} variant="subtitle1">
              Team information
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              <TextField
                sx={{ width: '47%' }}
                size="small"
                label="Team Name"
                name="teamName"
                placeholder="Enter team name"
                value=""
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                sx={{ width: '47%' }}
                size="small"
                label="Address"
                name="address"
                value=""
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                sx={{ width: '47%' }}
                size="small"
                label="Contact mail"
                name="mail"
                value=""
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Select
                sx={{ width: '47%' }}
                size="small"
                name="category"
                label="Category"
                value={0}
                SelectProps={{
                  native: true,
                }}
              >
                <MenuItem value={0}>Home</MenuItem>
              </Select>
              <TextField
                sx={{ width: '47%' }}
                size="small"
                label="EAN number(optional)"
                name="ean"
                value=""
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                sx={{ width: '47%' }}
                size="small"
                label="PO number(optional)"
                name="po"
                value=""
                InputLabelProps={{
                  shrink: true,
                }}
                type="text"
              />
              <Button
                disableElevation
                variant="contained"
                size="large"
                sx={{ color: 'white', marginLeft: 'auto' }}
              >
                Save changes
              </Button>
            </Box>
          </Box>
        </MainCard>
        <MainCard
          sx={{ width: '100%', marginTop: '16px' }}
          content={false}
          title={
            <ItemCardInfo
              title="Bank accounts"
              value="Last updated: -"
              img={<TextSnippet />}
            />
          }
          secondary={
            <Button
              disableElevation
              variant="contained"
              size="large"
              sx={{ color: 'white' }}
            >
              Add new
            </Button>
          }
        />
        <MainCard
          sx={{ width: '100%', marginTop: '16px' }}
          title={
            <ItemCardInfo
              title="Support"
              value="Last updated: -"
              img={<TextSnippet />}
            />
          }
        >
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ minWidth: '150px' }} variant="subtitle1">
              Overview
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Box
                sx={{
                  border: `1px solid ${theme.palette.grey[200]}`,
                  borderRadius: theme.spacing(1),
                  padding: theme.spacing(3),
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <ItemCardInfo
                    title="Success settings"
                    value="Last updated: -"
                    img={<HeadsetMic />}
                  />
                  <Chip variant="success" text="Active" />
                </Box>
                <Box sx={{ marginTop: '16px' }}>
                  {successSettingsItems.map(({ label, value }) => (
                    <Box
                      key={label}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        margin: '8px 0',
                      }}
                    >
                      <Typography variant="body1">{label}</Typography>
                      {value}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box
                sx={{
                  border: `1px solid ${theme.palette.grey[200]}`,
                  borderRadius: theme.spacing(1),
                  padding: theme.spacing(3),
                  marginTop: '16px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <ItemCardInfo
                    title="Support settings"
                    value="Last updated: -"
                    img={<HeadsetMic />}
                  />
                  <Chip variant="success" text="Active" />
                </Box>
                <Box sx={{ marginTop: '16px' }}>
                  {supportSettingsItems.map(({ label, value }) => (
                    <Box
                      key={label}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        margin: '8px 0',
                      }}
                    >
                      <Typography variant="body1">{label}</Typography>
                      {value}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </MainCard>
        <MainCard
          sx={{ width: '100%', marginTop: '16px' }}
          title={
            <ItemCardInfo
              title="Installer settings"
              value="Last updated: -"
              img={<TextSnippet />}
            />
          }
        >
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ minWidth: '150px' }} variant="subtitle1">
              Settings
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <TextField
                fullWidth
                size="small"
                label="Installer name"
                name="name"
                value=""
                InputLabelProps={{
                  shrink: true,
                }}
                type="text"
              />
              <TextField
                fullWidth
                size="small"
                label="Installer email"
                name="email"
                value=""
                InputLabelProps={{
                  shrink: true,
                }}
                type="text"
              />
              <TextField
                fullWidth
                size="small"
                label="Installer phone"
                name="phone"
                value=""
                InputLabelProps={{
                  shrink: true,
                }}
                type="text"
              />
              <TextField
                fullWidth
                size="small"
                label="Want to receive mail updates?"
                name="isReceive"
                value=""
                InputLabelProps={{
                  shrink: true,
                }}
                type="text"
              />
              <TextField
                fullWidth
                size="small"
                label="Enter email for updated"
                name="updatedEmail"
                value=""
                InputLabelProps={{
                  shrink: true,
                }}
                type="text"
              />
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography>System generated reports</Typography>
                <Switch checked={true} name="sgr" size="small" />
              </Box>
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography>User generated reports</Typography>
                <Switch checked={true} name="ugr" size="small" />
              </Box>
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography>Intercom generated reports</Typography>
                <Switch checked={true} name="igr" size="small" />
              </Box>
            </Box>
          </Box>
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
              disableElevation
              variant="contained"
              size="large"
              onClick={() => setOpenApplySubscription(true)}
              sx={{ color: 'white' }}
            >
              Apply subscription
            </Button>
          }
        />
        <MainCard
          sx={{ width: '100%', marginTop: '16px' }}
          title={
            <ItemCardInfo
              title="Installer settings"
              value="Last updated: -"
              img={<TextSnippet />}
            />
          }
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
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography>Auto accept join requests</Typography>
                  <Switch checked={true} name="sgr" size="small" />
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography>Auto generate charging sites</Typography>
                  <Switch checked={true} name="ugr" size="small" />
                </Box>
                <Divider />
                <Select
                  sx={{ width: '47%' }}
                  fullWidth
                  size="small"
                  name="theme"
                  label="Theme"
                  value={0}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <MenuItem value={0}>Home</MenuItem>
                </Select>
                <Button
                  disableElevation
                  variant="contained"
                  size="large"
                  sx={{ color: 'white', marginLeft: 'auto' }}
                >
                  Save theme
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  flexBasis: '100%',
                }}
              >
                <Typography variant="subtitle1">Other settings</Typography>
                <Typography variant="body1">
                  Enable users to automatically join your Team without your
                  approval
                </Typography>
                <Typography variant="body1">
                  Automatically create charging sites with charge point in thr
                  same location
                </Typography>
              </Box>
            </Box>
          </Box>
        </MainCard>
      </Box>
      <DetailPageMenu menuItems={menuItems} />
      <CreateSubscriptionModal
        isOpen={openApplySubscription}
        onClose={() => setOpenApplySubscription(false)}
        setPlan={setPlan}
      />
    </Box>
  );
};
