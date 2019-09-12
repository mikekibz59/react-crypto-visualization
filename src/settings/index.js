import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../shared/Page';
import CoinGrid from './CoinGrid';

export default function() {
  return (
    <Page name='settings'>
      <WelcomeMessage />
      <CoinGrid topSection />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
}
