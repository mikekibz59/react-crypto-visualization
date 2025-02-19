import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {initialCoinState, CoinResponse} from './../../types/coins'
import { fetchCoinsList } from '../thunks/coin_thunks';

const initialState: initialCoinState = {
	favourites: ['BTC', 'ETH', 'XMR', 'DOGE'],
	timeInterval: 'months',
	coinDetails: {data: [], loading: false, error: null },
	currentFavourite: null,
	historical: null,
	prices: null,
};

const coinSlice = createSlice({
	name: 'coins',
	initialState,
	reducers: {
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
	extraReducers: builder => {
		builder.addCase(fetchCoinsList.pending, (state)=>{
			state.coinDetails.loading = true;
			state.coinDetails.error = null;
		}).addCase(fetchCoinsList.fulfilled, (state, action)=>{
			state.coinDetails.loading = false;
			state.coinDetails.data = action.payload;
		}).addCase(fetchCoinsList.rejected, (state, action)=> {
			state.coinDetails.loading = false;
			state.coinDetails.error = action.payload;
		})
	}
});

export const {
    addFavourites,
    removeFavourite,
    setCurrentFavourite,
} = coinSlice.actions;

export default coinSlice.reducer;