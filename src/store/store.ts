
import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './slices/coinSlice'
import userReducer from './slices/userSlice';

export const store = configureStore({
	reducer: {
		coins: coinReducer,
		user: userReducer
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
