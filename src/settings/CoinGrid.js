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

function getCoinsToDispaly(coinlist) {
  return Object.keys(coinlist).slice(0, 100);
}

export default function() {
  return (
    <AppContext.Consumer>
      {({ coinlist }) => (
        <CoinGridStyled>
          {getCoinsToDispaly(coinlist).map(coinKey => (
            <CoinTile coinkey={coinKey} />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
