import React from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTile, DisabledTile, DeletableTile } from '../shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../shared/CoinImage';

//This is a component for the specific coin tile

// returns back the topsection with the added or removed keys
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
        //checks to see to the topsection if there and renders
        //the DeletableTile
        //And also checks the other coins and determine whether
        //it is in the favorites already and disables click events
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
