import { createAsyncThunk } from "@reduxjs/toolkit";
import {RootState} from '../store'
import {CoinResponse} from '../../types/coins'
import {cc} from '../../apiClient'
import { FETCH_COINS_LIST } from "../actionTypes/coinListActionTypes";


export const fetchCoinsList = createAsyncThunk<Array<CoinResponse>, void, {state: RootState}>(
    FETCH_COINS_LIST, 
    async (_, {rejectWithValue})=>{
        try {
            return await (cc.coinList()).Data;
        }catch(error: any){
            return rejectWithValue(error.message)
        }
    }
);