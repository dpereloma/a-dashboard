import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { DialogContent, DialogActions, Box } from '@mui/material';
import { EdgeDialog } from 'ui-component/EdgeDialog';
import { CreateTeamForm } from './CreateTeamForm';
import { Button } from 'ui-component/buttons/Button';

import { teamsActions } from 'store/teamsSlice';

export const CreateTeamModal = ({ isOpen, onClose }) => {
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
      onClose();
    },
  });

  return (
    <EdgeDialog open={isOpen} title="Create team" onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Box width={375}>
            <CreateTeamForm
              values={formik.values}
              handleChange={formik.handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button type="submit" fullWidth text="Create" />
        </DialogActions>
      </form>
    </EdgeDialog>
  );
};

CreateTeamModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
