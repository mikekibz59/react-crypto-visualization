import React from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTile } from '../shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../shared/CoinImage';

export default function({ coinkey }) {
  return (
    <AppContext.Consumer>
      {({ coinlist }) => {
        let coin = coinlist[coinkey];
        const TileClass = SelectableTile;
        return (
          <TileClass>
            <CoinHeaderGrid
              name={coin.Name}
              symbol={coin.Symbol}
            ></CoinHeaderGrid>
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
