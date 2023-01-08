import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';

import { Dialog, Slide } from '@mui/material';
import { DialogTitle } from './DialogTitle';

import { useDeviceIsDown } from 'hooks';

const SlideUp = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Container = styled(Dialog)(({ theme }) => ({
  [theme.breakpoints.down('tablet')]: {
    '& .MuiDialog-container': {
      alignItems: 'flex-end',
      borderRadius: theme.spacing(2),
    },
    '& .MuiPaper-root': {
      padding: 0,
      margin: 0,
      width: '100%',
      borderRadius: '16px 16px 0 0',
      maxHeight: '90vh',
    },
  },
}));

export const EdgeDialog = ({ title, children, onClose, ...props }) => {
  const isMobile = useDeviceIsDown('laptop');

  return (
    <Container
      {...props}
      TransitionComponent={isMobile ? SlideUp : undefined}
      onClose={onClose}
    >
      <DialogTitle className="edge-dialog-title" onClose={onClose}>
        {title}
      </DialogTitle>
      {children}
    </Container>
  );
};
