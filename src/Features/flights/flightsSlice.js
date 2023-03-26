import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import FlightApi from "../../common/FlightApi";
import { API_KEY } from "../../common/FlightApiKey";
const initialState = {
  flights: [],
  loading: false,
};

export const fetchFligtsBySearch = createAsyncThunk(
  "flights/fetchBySearch",
  async ({ to, from, departureDate, arrivaltime }) => {
    // const response = await axios(`https://siddiq-such-flight-v1.p.rapidapi.com/search?to=${to}&from=${from}&depart-date=${departureDate}&return-date=${arrivaltime}`,{headers: {
    //   'X-RapidAPI-Key': '4b7f509690mshed22c2fa103f765p1c300bjsn977c5e24bcdc',
    //   'X-RapidAPI-Host': 'siddiq-such-flight-v1.p.rapidapi.com'
    // }});
    const res = await FlightApi.get(
      `${API_KEY}/search?to=${to}&from=${from}&depart-date=${departureDate}&return-date=${arrivaltime}`
    );
    return res;
  }
);
export const flightSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    addFlights: (state, { payload }) => {
      state.flights = payload;
    },
  },
  extraReducers: {
    [fetchFligtsBySearch.pending]: () => {
      console.log("pending");
    },
    [fetchFligtsBySearch.fulfilled]: ({ payload }) => {
      console.log("fullfilled");
    },
    [fetchFligtsBySearch.rejected]: ({ payload }) => {
      console.log("rejected");
    },
  },
});

export const { addFlights } = flightSlice.actions;
export const flights = (state) => state.flights.flights;
export default flightSlice.reducer;
