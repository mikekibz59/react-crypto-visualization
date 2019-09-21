import React from 'react';
import AppLayout from './AppLayout';
import { AppProvider } from './AppProvider';
import AppBar from './AppBar';
import Settings from '../settings';
import Content from '../shared/Content';
import Dashboard from '../Dashboard';
import './App.css';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
