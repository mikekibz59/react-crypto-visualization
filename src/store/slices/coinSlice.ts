import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoinsState, MAX_FAVOURITES } from './../../types/coins'
import { fetchCoinListBuilder, fetchPriceListBuilder } from '../builders/coinsBuilder'

const initialState: CoinsState = {
	favourites: ['BTC', 'ETH', 'XMR', 'DOGE'],
	timeInterval: 'months',
	coinDetails: { data: [], loading: false, error: null },
	currentFavourite: null,
	historical: { data: [], loading: false, error: null },
	prices: { data: {}, loading: false, error: null },
};

const coinSlice = createSlice({
	name: 'coins',
	initialState,
	reducers: {
		addFavourites(state, action: PayloadAction<string>) {
			if (state.favourites.length < MAX_FAVOURITES && !state.favourites.includes(action.payload)) {
				state.favourites.push(action.payload);
			}
		},
		removeFavourite(state, action: PayloadAction<string>) {
			state.favourites = state.favourites.filter(coin => coin !== action.payload)
		},
		setCurrentFavourite(state, action: PayloadAction<string>) {
			state.currentFavourite = action.payload;
		}
	},
	extraReducers: builder => {
		fetchCoinListBuilder(builder);
		fetchPriceListBuilder(builder);
	}
});

export const {
	addFavourites,
	removeFavourite,
	setCurrentFavourite,
} = coinSlice.actions;

export default coinSlice.reducer;
