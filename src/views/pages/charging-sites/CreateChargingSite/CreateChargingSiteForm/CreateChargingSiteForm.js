import React from 'react';

import { TextField } from '@mui/material';

import * as S from './CreateChargingSiteForm.styles';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { chargingSitesActions } from '../../../../../store/chargingSItesSlice';
import { Button } from '../../../../../ui-component/buttons/Button';

export const CreateChargingSiteForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      plan: '',
      members: '',
      chargePoints: '',
      wallet: '',
      state: 'available',
    },
    onSubmit: (values) => {
      dispatch(
        chargingSitesActions.addChargingSite({
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

  const createTeamFormFields = [
    {
      name: 'name',
      component: renderTextField('name'),
    },
    {
      name: 'address',
      component: renderTextField('address'),
    },
    {
      name: 'team',
      component: renderTextField('team'),
    },
    {
      name: 'smartQueue',
      component: renderTextField('smartQueue'),
    },
    {
      name: 'loadBalancing',
      component: renderTextField('loadBalancing'),
    },
  ];

  return (
    <form onSubmit={formik.handleSubmit}>
      {createTeamFormFields.map(({ name, component }) => (
        <S.FormItem key={name}>
          <S.Label>{name}</S.Label>
          {component}
        </S.FormItem>
      ))}
      <Button type="submit" fullWidth text="Create" />
    </form>
  );
};
