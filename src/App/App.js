import React from 'react';
import AppLayout from './AppLayout';
import { AppProvider } from './AppProvider';
import AppBar from './AppBar';
import Settings from '../settings/index';
import './App.css';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Settings />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
