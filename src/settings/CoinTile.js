import React from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTile, DisabledTile, DeletableTile } from '../shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../shared/CoinImage';

export default function({ coinkey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinlist }) => {
        let coin = coinlist[coinkey];
        let TileClass = SelectableTile;
        if (topSection) {
          TileClass = DeletableTile;
        }
        return (
          <TileClass>
            <CoinHeaderGrid
              name={coin.Name}
              symbol={coin.Symbol}
              topSection={topSection}
            ></CoinHeaderGrid>
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
