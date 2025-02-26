'use client';

import React from 'react';
import { ReduxProvider } from './Providers';
import Navigation from './Navigation';
import styled from 'styled-components';
import './global.css';

const Layout = styled.div`
  padding: 40px;
`;


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <title>CryptoFinance</title>
            </head>
            <body>
                <Layout>
                    <ReduxProvider>
                        <Navigation />
                        {children}
                    </ReduxProvider>
                </Layout>
            </body>
        </html>
    )
}