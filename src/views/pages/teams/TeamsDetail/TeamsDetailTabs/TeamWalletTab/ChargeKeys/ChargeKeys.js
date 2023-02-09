import React from 'react';

import { MainCard } from 'ui-component/cards/MainCard';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { TextSnippet } from '@mui/icons-material';
import { Button } from 'ui-component/buttons/Button';
import { TeamWalletChargeKeysTable } from './TeamWalletChargeKeysTable';
import { CreateChargeKeyModal } from './CreateChargeKeyModal';

export const ChargeKeys = () => {
  const [openPairChargeKey, setOpenPairChargeKey] = React.useState(false);
  const [chargeKeys, setChargeKeys] = React.useState([]);

  return (
    <>
      <MainCard
        sx={{ width: '100%', marginTop: '16px' }}
        contentSX={{ padding: 0 }}
        title={
          <ItemCardInfo
            title="Charge keys"
            value="Last updated: -"
            img={<TextSnippet />}
          />
        }
        secondary={
          <Button
            size="large"
            onClick={() => setOpenPairChargeKey(true)}
            text="Pair change key"
          />
        }
      >
        <TeamWalletChargeKeysTable chargeKeys={chargeKeys} />
      </MainCard>
      <CreateChargeKeyModal
        isOpen={openPairChargeKey}
        onClose={() => setOpenPairChargeKey(false)}
        setChargeKeys={setChargeKeys}
      />
    </>
  );
};
