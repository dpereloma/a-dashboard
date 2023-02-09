import React from 'react';

import { TextSnippet } from '@mui/icons-material';
import { ItemCardInfo } from 'ui-component/cards/ItemCardInfo';
import { Button } from 'ui-component/buttons/Button';
import { MainCard } from 'ui-component/cards/MainCard';
import { TeamWalletInvoicesTable } from './TeamWalletInvoicesTable';
import { CreateEnableInvoice } from './CreateEnableInvoice';

export const Invoices = () => {
  const [openEnableInvoice, setOpenEnableInvoice] = React.useState(false);
  const [invoices, setInvoices] = React.useState([]);

  return (
    <>
      <MainCard
        sx={{ width: '100%', marginTop: '16px' }}
        contentSX={{ padding: 0 }}
        title={<ItemCardInfo title="Invoices" img={<TextSnippet />} />}
        secondary={
          <Button
            size="large"
            onClick={() => setOpenEnableInvoice(true)}
            text="Enable invoicing"
          />
        }
      >
        <TeamWalletInvoicesTable invoices={invoices} />
      </MainCard>
      <CreateEnableInvoice
        isOpen={openEnableInvoice}
        onClose={() => setOpenEnableInvoice(false)}
        setInvoices={setInvoices}
      />
    </>
  );
};
