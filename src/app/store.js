import { configureStore } from "@reduxjs/toolkit";
import flightsSlice from "../Features/flights/flightsSlice";
export default configureStore({
    reducer:{
        flight:flightsSlice
    }
})