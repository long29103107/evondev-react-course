import { createSlice } from '@reduxjs/toolkit';

const getInitialDarkMode = () => {
    if (typeof window === 'undefined') return false;

    const stored = localStorage.getItem('theme');
    if (stored === 'true') return true;
    if (stored === 'false') return false;

    const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;

    return prefersDark;
};


const globalSlice = createSlice({
    name: 'global',
    initialState: {
        darkMode: getInitialDarkMode() || false,
        showSidebar: true,
    },
    reducers: {
        toggleDarkMode: (state, { payload }) => {
            return {
                ...state,
                darkMode: payload,
            }
        },
        toggleShowSidebar: (state, { payload }) => {
            return {
                ...state,
                showSidebar: payload,
            }
        },
    },
});

export const { toggleDarkMode, toggleShowSidebar } = globalSlice.actions;
export default globalSlice.reducer;