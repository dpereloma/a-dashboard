import React, { useState } from 'react';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Box, Stack, TextField } from '@mui/material';
import { MainCard } from 'ui-component/cards/MainCard';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Formik } from 'formik';
import { ChargeSessionFormValidation } from './ChargeSession.utils';
import { ChargeSessionTable } from './ChargeSessionTable';
import { MenuItemsIds } from '../ChargePointsDetail.types';

export const ChargeSession = () => {
  return (
    // @ts-ignore
    <MainCard
      id={MenuItemsIds.CHARGE_SESSIONS}
      // @ts-ignore
      title={<ItemCardInfo title="Charge session" />}
      contentSX={{ padding: 0 }}
      secondary={
        <Formik
          initialValues={{
            startDate: null,
            endDate: null,
            search: '',
          }}
          validationSchema={ChargeSessionFormValidation}
          onSubmit={() => console.log(1)}
        >
          {({
            values,
            handleChange,
            handleBlur,
            setFieldValue,
            touched,
            errors,
          }) => (
            <Stack direction="row" spacing={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box sx={{ width: '155px' }}>
                  <DesktopDatePicker
                    label="Start date"
                    inputFormat="dd/MM/yyyy"
                    value={values.startDate}
                    onChange={(newDate) => setFieldValue('startDate', newDate)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        onBlur={handleBlur}
                        error={!!errors.startDate || params.error}
                        helperText={errors.startDate || params.helperText}
                      />
                    )}
                  />
                </Box>
                <Box sx={{ width: '155px' }}>
                  <DesktopDatePicker
                    label="End date"
                    inputFormat="dd/MM/yyyy"
                    value={values.endDate}
                    onChange={(newDate) => setFieldValue('endDate', newDate)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        onBlur={handleBlur}
                        error={
                          touched.endDate && (!!errors.endDate || params.error)
                        }
                        helperText={
                          touched.endDate
                            ? errors.endDate || params.helperText
                            : ''
                        }
                      />
                    )}
                  />
                </Box>
              </LocalizationProvider>
              <TextField
                sx={{ width: '140px' }}
                name="search"
                value={values.search}
                placeholder="Search"
                onChange={handleChange}
              />
            </Stack>
          )}
        </Formik>
      }
    >
      <ChargeSessionTable />
    </MainCard>
  );
};
