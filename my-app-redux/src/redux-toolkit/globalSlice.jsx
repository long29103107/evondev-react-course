import { createSlice } from '@reduxjs/toolkit';
import { getInitialDarkMode } from '@/themeStorage';


const globalSlice = createSlice({
    name: 'global',
    initialState: {
        darkMode: getInitialDarkMode() || false,
    },
    reducers: {
        toggleDarkMode: (state, { payload }) => {
            return {
                ...state,
                darkMode: payload,
            }
        },
    },
});

export const { toggleDarkMode } = globalSlice.actions;
export default globalSlice.reducer;