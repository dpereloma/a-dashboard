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

import { CreateEnableInvoiceForm } from './CreateEnableInvoiceForm';

export const CreateEnableInvoice = ({ isOpen, onClose, setInvoices }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      vat: '',
      email: '',
      address: '',
      autoBalance: false,
    },
    onSubmit: (values) => {
      setInvoices((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...values,
        },
      ]);
      onClose();
    },
  });

  return (
    <EdgeDialog open={isOpen} title="Enable invoicing" onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Box width={375}>
            <Typography>
              This will automatically generate a invoice by the end of every
              month, which will also allow tour wallet balance to be negative.
            </Typography>
            <CreateEnableInvoiceForm
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

CreateEnableInvoice.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
