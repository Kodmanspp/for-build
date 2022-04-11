import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { $api } from '../../utils/axios';

const initialState = {
  loading: false,
  error: null,
  ids: [],
  entities: {},
};

export const newCollectionAdapter = createEntityAdapter();
export const newCollectionSelectors = newCollectionAdapter.getSelectors(
  (state) => state.newCollection
);

export const fetchNewCollection = createAsyncThunk(
  'newCollection/fetchNewCollection',
  async () => {
    try {
      const { data } = await $api.get(`products/products/`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const newCollectionSlice = createSlice({
  name: 'newCollection',
  initialState: newCollectionAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    // Fetch
    builder.addCase(fetchNewCollection.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNewCollection.fulfilled, (state, action) => {
      newCollectionAdapter.setAll(state, action.payload);
      state.loading = false;
    });
    builder.addCase(fetchNewCollection.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const newCollectionReducer = newCollectionSlice.reducer;
