import PropTypes from 'prop-types';

import { DialogContent, Box, Typography } from '@mui/material';
import { EdgeDialog } from 'ui-component/EdgeDialog';

import * as S from './InviteMemberModal.styles';
import {
  PersonAddAlt1,
  GroupAdd,
  KeyboardArrowRight,
} from '@mui/icons-material';

export const InviteMemberModal = ({ isOpen, onClose }) => {
  return (
    <EdgeDialog open={isOpen} title="Team member invite" onClose={onClose}>
      <DialogContent>
        <Box
          width={375}
          sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <S.CardItem>
            <S.Icon>
              <PersonAddAlt1 />
            </S.Icon>
            <Box>
              <Typography variant="subtitle1">Invite team member</Typography>
              <Typography variant="body1">Invite via mail or phone</Typography>
            </Box>
            <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
              <KeyboardArrowRight />
            </Box>
          </S.CardItem>
          <S.CardItem>
            <S.Icon>
              <GroupAdd />
            </S.Icon>
            <Box>
              <Typography variant="subtitle1">Invite many at once</Typography>
              <Typography variant="body1">
                Bulk invite via CSV upload
              </Typography>
            </Box>
            <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
              <KeyboardArrowRight />
            </Box>
          </S.CardItem>
        </Box>
      </DialogContent>
    </EdgeDialog>
  );
};

InviteMemberModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
