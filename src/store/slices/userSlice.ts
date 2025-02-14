import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../../types/user";

const initialState : UserInterface = {
    confirmedCoins: false
}


const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setConfirmedCoins(state, action: PayloadAction<boolean>){
            state.confirmedCoins = action.payload;
        }
	},
});


export const {
    setConfirmedCoins,
} = userSlice.actions;

export default userSlice.reducer;