import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { DialogContent, DialogActions, Box, Button } from '@mui/material';
import { EdgeDialog } from 'ui-component/EdgeDialog';

import { CreateChargingSiteForm } from './CreateChargingSiteForm';
import { chargingSitesActions } from '../../../../../store/chargingSItesSlice';

export const ChargingSitesModal = ({ isOpen, onClose }) => {
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
      onClose();
    },
  });

  return (
    <EdgeDialog open={isOpen} title="Add new" onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Box width={375}>
            <CreateChargingSiteForm
              values={formik.values}
              handleChange={formik.handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={false}
          >
            Create
          </Button>
        </DialogActions>
      </form>
    </EdgeDialog>
  );
};

ChargingSitesModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
