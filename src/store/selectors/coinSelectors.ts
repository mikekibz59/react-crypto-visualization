import { RootState } from "../store";

export const selectCoinsPrices = (state: RootState) => state.coins.prices;
export const selectCoinsFavourites = (state: RootState) => state.coins.favourites;
export const selectCoinsCurrentFavourite = (state: RootState) => state.coins.currentFavourite;
export const selectCoinsTimeInterval = (state: RootState) => state.coins.timeInterval;
