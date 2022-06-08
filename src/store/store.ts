import {configureStore} from "@reduxjs/toolkit";
import {searchSlice} from "./searchSlice";

export const store = configureStore({
    reducer: {
        ads: searchSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>