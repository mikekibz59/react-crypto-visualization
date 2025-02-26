import { fetchCoinsList, fetchPrices } from "../thunks/coin_thunks";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { CoinsState, Prices } from "../../types/coins";

export const fetchCoinListBuilder = (builder: ActionReducerMapBuilder<CoinsState>) => {
    builder.addCase(fetchCoinsList.pending, (state) => {
        state.coinDetails.loading = true;
        state.coinDetails.error = null;
    }).addCase(fetchCoinsList.fulfilled, (state, action) => {
        state.coinDetails.loading = false;
        state.coinDetails.data = action.payload;
    }).addCase(fetchCoinsList.rejected, (state, action) => {
        state.coinDetails.loading = false;
        state.coinDetails.error = action.payload;
    });
}

export const fetchPriceListBuilder = (builder: ActionReducerMapBuilder<CoinsState>) => {
    builder.addCase(fetchPrices.pending, (state) => {
        state.prices.loading = true;
        state.prices.error = null;
    }).addCase(fetchPrices.fulfilled, (state, action) => {
        state.prices.loading = false;
        state.prices.data = action.payload;
    }).addCase(fetchPrices.rejected, (state, action) => {
        state.prices.loading = false;
        state.prices.error = action.payload;
    });
}
