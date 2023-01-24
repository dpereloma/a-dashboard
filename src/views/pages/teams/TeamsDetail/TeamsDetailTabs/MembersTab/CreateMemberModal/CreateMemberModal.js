import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import { DialogContent, DialogActions, Box } from '@mui/material';
import { EdgeDialog } from 'ui-component/EdgeDialog';
import { Button } from 'ui-component/buttons/Button';

export const CreateMemberModal = ({ isOpen, onClose, setMembers }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      code: '',
      userRole: 'admin',
      priceGroup: 'default',
      access: 'all',
      state: 'accepted',
    },
    onSubmit: (values) => {
      setMembers((prevState) => [
        ...prevState,
        {
          id: Date.now(),
          ...values,
        },
      ]);
      onClose();
    },
  });

  return (
    <EdgeDialog open={isOpen} title="Team member invite" onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Box width={375}>
            <CreateMemberModal />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button type="submit" fullWidth text="Invite" />
        </DialogActions>
      </form>
    </EdgeDialog>
  );
};

CreateMemberModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  setMembers: PropTypes.func,
};
