import { createSlice, createSelector } from "@reduxjs/toolkit";

const colorsSlice = createSlice({
  name: "colors",
  initialState: {
    results: [],
    loading: "",
    errorMessage: "",
  },
  reducers: {
    fetchColors: (state) => {
      state.loading = "loading";
    },
    setColors: (state, { payload: apiResults }) => {
      state.loading = "success";
      state.results = apiResults;
    },
    fetchErrorColors: (state, { payload: error }) => {
      state.loading = "error";
      console.log(error);
      state.errorMessage = error;
    },
    fetchFilteredColor: (state) => {
      state.loading = "loading";
    },
  },
});

const selectColorsState = (state) => state.colors;
export const selectColorsResults = createSelector(
  selectColorsState,
  (state) => state.results
);

export const selectColorsLoading = createSelector(
  selectColorsState,
  (state) => state.loading
);

export const selectErrorMessage = createSelector(
  selectColorsState,
  (state) => state.errorMessage
);

export const { fetchColors, setColors, fetchErrorColors, fetchFilteredColor } =
  colorsSlice.actions;

export default colorsSlice.reducer;
