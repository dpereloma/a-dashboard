import React from 'react';

import { MenuItem, Select, TextField } from '@mui/material';

import {
  accessibilities,
  connections,
  pointStates,
  states,
} from '../../ChargePoints/ChargePoints.utils';
import * as S from './CreateChargePointForm.styles';
import { Button } from '../../../../../ui-component/buttons/Button';
import { useFormik } from 'formik';
import { chargePointsActions } from '../../../../../store/chargePointsSlice';
import { useDispatch } from 'react-redux';

export const CreateChargePointForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      code: '',
      site: '',
      pointState: 'active',
      connection: 'disconnected',
      accessibility: 'public',
      state: 'connected',
    },
    onSubmit: (values) => {
      dispatch(
        chargePointsActions.addChargePoint({
          id: Date.now(),
          ...values,
        }),
      );
    },
  });
  const renderTextField = (name) => (
    <TextField
      size="small"
      fullWidth
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      type="text"
    />
  );

  const renderSelect = (name, items) => (
    <Select
      fullWidth
      size="small"
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      SelectProps={{
        native: true,
      }}
    >
      {items.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );

  const createChargePointFormFields = [
    {
      name: 'name',
      component: renderTextField('name'),
    },
    {
      name: 'code',
      component: renderTextField('code'),
    },
    {
      name: 'site',
      component: renderTextField('site'),
    },
    {
      name: 'pointState',
      component: renderSelect('pointState', pointStates),
    },
    {
      name: 'connection',
      component: renderSelect('connection', connections),
    },
    {
      name: 'accessibility',
      component: renderSelect('accessibility', accessibilities),
    },
    {
      name: 'state',
      component: renderSelect('state', states),
    },
  ];

  return (
    <form onSubmit={formik.handleSubmit}>
      {createChargePointFormFields.map(({ name, component }) => (
        <S.FormItem key={name}>
          <S.Label>{name}</S.Label>
          {component}
        </S.FormItem>
      ))}
      <Button type="submit" fullWidth text="Create" />
    </form>
  );
};
