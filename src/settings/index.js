import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../shared/Page';

export default function() {
  return (
    <Page name='settings'>
      <WelcomeMessage /> <ConfirmButton />
    </Page>
  );
}
