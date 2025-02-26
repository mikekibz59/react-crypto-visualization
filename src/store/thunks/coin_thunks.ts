import moment from 'moment';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from '../store'
import { CoinResponse, PricesResponse, DEFAULT_SUPPORTED_CURRENCY, TIME_UNITS, HistoricalDetail } from '../../types/coins'
import { cc } from '../../services/apiClient'
import { FETCH_COINS_LIST, FETCH_PRICES, FETCH_HISTORICAL } from "../actionTypes/coinListActionTypes";
import { selectCoinsFavourites, selectCoinsCurrentFavourite, selectCoinsTimeInterval } from '../selectors/coinSelectors'


export const fetchCoinsList = createAsyncThunk<Array<CoinResponse>, void>(
    FETCH_COINS_LIST,
    async (_, { rejectWithValue }) => {
        try {
            return await (cc.coinList()).Data;
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
);

export const fetchPrices = createAsyncThunk<PricesResponse, void, { state: RootState }>(
    FETCH_PRICES,
    async (_, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState();
            const favourites = selectCoinsFavourites(state);
            return await cc.priceFull(favourites, [DEFAULT_SUPPORTED_CURRENCY])
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);


export const fetchHistorical = createAsyncThunk<
    HistoricalDetail[],
    void,
    { state: RootState }
>(
    FETCH_HISTORICAL,
    async (_, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState(); // getState is synchronous
            const currentFavourite = selectCoinsCurrentFavourite(state);
            if (!currentFavourite) {
                return rejectWithValue("No current favourite selected.");
            }

            const timeInterval = selectCoinsTimeInterval(state);
            let promises = [];
            for (let units = TIME_UNITS; units > 0; units--) {
                promises.push(
                    cc.priceHistorical(
                        currentFavourite,
                        [DEFAULT_SUPPORTED_CURRENCY],
                        moment().subtract({ [timeInterval]: units }).toDate()
                    )
                );
            }
            const results = await Promise.all(promises);
            const historical: HistoricalDetail[] = [
                {
                    name: currentFavourite,
                    data: results.map((ticker, index): [number, number] => [
                        moment()
                            .subtract({ [timeInterval]: TIME_UNITS - index })
                            .valueOf(),
                        ticker.USD
                    ])
                }
            ];
            return historical;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);
