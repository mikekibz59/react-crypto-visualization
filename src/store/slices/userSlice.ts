import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface,userPageTypes  } from "../../types/user";

const initialState : UserInterface = {
    confirmedCoins: false,
	currentPage: 'dashboard', // acts as the default page for the user.
}


const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setConfirmedCoins(state, action: PayloadAction<boolean>){
            state.confirmedCoins = action.payload;
        },
		setCurrentPage(state, action: PayloadAction<userPageTypes>){
			state.currentPage = action.payload;
		}
	},
});


export const {
    setConfirmedCoins,
	setCurrentPage
} = userSlice.actions;

export default userSlice.reducer;