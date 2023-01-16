import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { DialogContent, DialogActions, Box } from '@mui/material';
import { EdgeDialog } from 'ui-component/EdgeDialog';
import { CreateChargePointForm } from './CreateChargePointForm';
import { Button } from 'ui-component/buttons/Button';

import { chargePointsActions } from 'store/chargePointsSlice';

export const CreateChargePointModal = ({ isOpen, onClose }) => {
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
      onClose();
    },
  });

  return (
    <EdgeDialog open={isOpen} title="Create charge point" onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Box width={375}>
            <CreateChargePointForm
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

CreateChargePointModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
