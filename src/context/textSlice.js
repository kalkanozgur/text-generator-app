import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "./api";

export const getTextAsync = createAsyncThunk(
	"text/getTextAsync",
	async (numParas) => {
		if (!numParas) numParas = 2;
		return fetchApi(numParas);
	}
);

const textSlice = createSlice({
	name: "text",
	initialState: {
		text: [],
		paras: 2,
		isLoading: false,
		error: null,
	},
	extraReducers: {
		[getTextAsync.pending]: (state) => {
			state.isLoading = true;
		},
		[getTextAsync.fulfilled]: (state, action) => {
			state.text = action.payload;
			state.isLoading = false;
		},
		[getTextAsync.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		},
	},
});

export default textSlice.reducer;
