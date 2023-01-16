import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import { DialogContent, DialogActions, Box, Typography } from '@mui/material';
import { EdgeDialog } from 'ui-component/EdgeDialog';
import { CreateEnableInvoiceForm } from './CreateEnableInvoiceForm';
import { Button } from 'ui-component/buttons/Button';

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
          <Button type="submit" fullWidth text="Create" />
        </DialogActions>
      </form>
    </EdgeDialog>
  );
};

CreateEnableInvoice.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
