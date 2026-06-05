import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLocations: []
};

const cartSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.selectedLocations.push(action.payload);
    },
    removeLocation: (state, action) => {
      state.selectedLocations =
        state.selectedLocations.filter(
          item => item.id !== action.payload
        );
    }
  }
});

export const { addLocation, removeLocation } =
  cartSlice.actions;

export default cartSlice.reducer;
