import React, { useState } from 'react';

import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Button } from 'ui-component/buttons/Button';
import MainCard from 'ui-component/cards/MainCard';
import { CreateSubscriptionModal } from '../../../teams/TeamsDetail/TeamsDetailTabs/SettingsTab/CreateSubscriptionModal';

import { WorkspacePremium } from '@mui/icons-material';
import { MenuItemsIds } from '../ChargePointsDetail.types';

export const Subscriptions = () => {
  const [openApplySubscription, setOpenApplySubscription] = useState(false);
  const [plan, setPlan] = React.useState('');

  return (
    <>
      <MainCard
        id={MenuItemsIds.SUBSCRIPTIONS}
        content={false}
        title={
          <ItemCardInfo
            title={plan || 'No subscriptions'}
            value="Next purchase: -"
            img={<WorkspacePremium />}
          />
        }
        secondary={
          <Button
            size="large"
            onClick={() => setOpenApplySubscription(true)}
            text="Apply subscription"
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
