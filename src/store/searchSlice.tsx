import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    searchValue: "",
}

export const searchSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        searchForAd: (state, actions: PayloadAction<string>) => {
           state.searchValue = actions.payload
        },
    }
});

export const {searchForAd} = searchSlice.actions;