import React from 'react';

import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Button } from 'ui-component/buttons/Button';
import { MainCard } from 'ui-component/cards/MainCard';

import { TextSnippet } from '@mui/icons-material';

export const BankAccounts = () => {
  return (
    <MainCard
      sx={{ width: '100%', marginTop: '16px' }}
      content={false}
      title={
        <ItemCardInfo
          title="Bank accounts"
          value="Last updated: -"
          img={<TextSnippet />}
        />
      }
      secondary={<Button size="large" text="Add new" />}
    />
  );
};
