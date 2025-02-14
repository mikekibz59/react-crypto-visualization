import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {initialCoinState, CoinListResponse} from './../../types/coins'

const initialState: initialCoinState = {
	favourites: ['BTC', 'ETH', 'XMR', 'DOGE'],
	timeInterval: 'months',
	coinList: [],
	currentFavourite: null,
	historical: null,
	prices: null,
};

const coinSlice = createSlice({
	name: 'coins',
	initialState,
	reducers: {
		setCoinList(state, action: PayloadAction<CoinListResponse[]>) {
			state.coinList = action.payload;
		},
		addFavourites(state, action: PayloadAction<string>) {
			if (!state.favourites.includes(action.payload)) {
				state.favourites.push(action.payload);
			}
		},
        removeFavourite(state, action: PayloadAction<string>){
            state.favourites = state.favourites.filter(coin=> coin !== action.payload)
        },
        setCurrentFavourite(state, action: PayloadAction<string>){
            state.currentFavourite = action.payload;
        }
	},
});

export const {
    setCoinList,
    addFavourites,
    removeFavourite,
    setCurrentFavourite,
} = coinSlice.actions;

export default coinSlice.reducer;