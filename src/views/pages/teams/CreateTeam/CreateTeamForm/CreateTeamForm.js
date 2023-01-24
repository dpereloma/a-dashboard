import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { TextField } from '@mui/material';
import { Button } from '../../../../../ui-component/buttons/Button';

import * as S from './CreateTeamForm.styles';
import { teamsActions } from '../../../../../store/teamsSlice';

export const CreateTeamForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      plan: '',
      members: '',
      chargePoints: '',
      wallet: '',
    },
    onSubmit: (values) => {
      dispatch(
        teamsActions.addTeam({
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
      name: 'plan',
      component: renderTextField('plan'),
    },
    {
      name: 'members',
      component: renderTextField('members'),
    },
    {
      name: 'chargePoints',
      component: renderTextField('chargePoints'),
    },
    {
      name: 'wallet',
      component: renderTextField('wallet'),
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
