import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from '../../api/list';

import { Data } from '../../api/list';
import { LoadStatuses } from '../../api/types';

export type ListState = {
    data: Data[];
    status: LoadStatuses;
};

const initialState: ListState = {
	data: [],
	status: LoadStatuses.NotRequested,
};

export const fetchData = createAsyncThunk('list/fetchData', async () => {
	const response = await getData();
	return response.data;
});

export const counterSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchData.pending, (state) => {
				state.status = LoadStatuses.Loading;
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.status = LoadStatuses.Succeeded;
				state.data = action.payload;
			})
			.addCase(fetchData.rejected, (state) => {
				state.status = LoadStatuses.Error;
			});
	},
});

export default counterSlice.reducer;
