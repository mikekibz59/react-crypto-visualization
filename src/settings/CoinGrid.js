import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

function getCoinsToDispaly(coinlist, topSection, favorites) {
  return topSection
    ? favorites
    : Object.keys(coinlist).slice(0, topSection ? 10 : 100);
}

export default function({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinlist, favorites }) => (
        <CoinGridStyled>
          {getCoinsToDispaly(coinlist, topSection, favorites).map(coinKey => (
            <CoinTile coinkey={coinKey} topSection={topSection} />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
