import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "../../constants";

const filtersSlice = createSlice({
  initialState: {
    status: statusFilters.all,
  },
  reducers: {
    setStatusFilter(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
  name: "filters",
});

export const reducer = filtersSlice.reducer;
export const { setStatusFilter } = filtersSlice.actions;
