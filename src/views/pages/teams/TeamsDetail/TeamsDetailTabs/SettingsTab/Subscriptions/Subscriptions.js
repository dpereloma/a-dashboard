import React, { useState } from 'react';

import { TextSnippet } from '@mui/icons-material';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Button } from 'ui-component/buttons/Button';
import MainCard from 'ui-component/cards/MainCard';
import { CreateSubscriptionModal } from '../CreateSubscriptionModal';

export const Subscriptions = () => {
  const [openApplySubscription, setOpenApplySubscription] = useState(false);
  const [plan, setPlan] = React.useState('');

  return (
    <>
      <MainCard
        sx={{ width: '100%', marginTop: '16px' }}
        content={false}
        title={
          <ItemCardInfo
            title={plan || 'No subscriptions'}
            value="Next purchase: -"
            img={<TextSnippet />}
          />
        }
        secondary={
          <Button
            size="large"
            fullWidth
            text="Apply subscription"
            onClick={() => setOpenApplySubscription(true)}
          />
        }
      />
      <CreateSubscriptionModal
        isOpen={openApplySubscription}
        onClose={() => setOpenApplySubscription(false)}
        setPlan={setPlan}
      />
    </>
  );
};
