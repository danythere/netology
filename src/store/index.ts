import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import listReducer from './slices/list';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const store = configureStore({
	reducer: {
		list: listReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
