import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import {
  DialogContent,
  DialogActions,
  Box,
  Button,
  Typography,
  MenuItem,
  Select,
} from '@mui/material';
import { EdgeDialog } from 'ui-component/EdgeDialog';

export const CreateSubscriptionModal = ({ isOpen, onClose, setPlan }) => {
  const items = [
    {
      label: 'Basic',
      value: 'basic',
    },
    {
      label: 'Pro',
      value: 'pro',
    },
  ];

  return (
    <EdgeDialog open={isOpen} title="Apply subscription" onClose={onClose}>
      <DialogContent>
        <Box width={500}>
          <Box>Select plan</Box>
          <Select
            fullWidth
            size="small"
            value="plan"
            placeholder="Please select"
            onChange={(e) => setPlan(e.target.value)}
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
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => onClose()}
          color="primary"
          fullWidth
          disabled={false}
        >
          Apply subscription
        </Button>
      </DialogActions>
    </EdgeDialog>
  );
};

CreateSubscriptionModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
