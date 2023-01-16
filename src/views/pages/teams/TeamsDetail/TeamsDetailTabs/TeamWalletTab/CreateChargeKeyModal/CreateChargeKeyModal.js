import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import {
  DialogContent,
  DialogActions,
  Box,
  Button,
  Typography,
} from '@mui/material';
import { EdgeDialog } from 'ui-component/EdgeDialog';

import { CreateChargeKeyForm } from './CreateChargeKeyForm';

export const CreateChargeKeyModal = ({ isOpen, onClose, setChargeKeys }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      vat: '',
      email: '',
      address: '',
      autoBalance: false,
      id: '',
    },
    onSubmit: (values) => {
      setChargeKeys((prev) => [...prev, values]);
      onClose();
    },
  });

  return (
    <EdgeDialog open={isOpen} title="Pair a charge key" onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Box width={500}>
            <CreateChargeKeyForm
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

CreateChargeKeyModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
