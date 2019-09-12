import React from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTile, DisabledTile, DeletableTile } from '../shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../shared/CoinImage';

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
}

export default function({ coinkey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinlist, addCoin, removeCoin, isInFavorites }) => {
        let coin = coinlist[coinkey];
        let TileClass = SelectableTile;
        if (topSection) {
          TileClass = DeletableTile;
        } else if (isInFavorites(coinkey)) {
          TileClass = DisabledTile;
        }
        return (
          <TileClass
            onClick={clickCoinHandler(topSection, coinkey, addCoin, removeCoin)}
          >
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
