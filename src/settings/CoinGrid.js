import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

function getLowerSectionCoins(coinlist, filteredCoins) {
  console.log(filteredCoins)
  return (
    (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinlist).slice(0, 100)
  );
}

function getCoinsToDispaly(coinlist, topSection, favorites, filteredCoins) {
  return topSection ? favorites : getLowerSectionCoins(coinlist, filteredCoins);
}

export default function({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinlist, favorites, filteredCoins }) => (
        <CoinGridStyled>
          {getCoinsToDispaly(
            coinlist,
            topSection,
            favorites,
            filteredCoins
          ).map(coinKey => (
            <CoinTile coinkey={coinKey} topSection={topSection} />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
