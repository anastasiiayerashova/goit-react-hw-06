import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ''
}

const slice = createSlice({
    name: 'filters',
    initialState,
    selectors: {
        selectNameFilter: state => state.name
    },
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { selectNameFilter } = slice.selectors
export const filtersReducer = slice.reducer
export const {changeFilter} = slice.actions