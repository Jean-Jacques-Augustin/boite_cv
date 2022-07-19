import { createSlice } from "@reduxjs/toolkit";

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

const initialState = {
     darkMode: darkThemeMq.matches,
};

export const themeSlice = createSlice({
     name: "darkMode",
     initialState,
     reducers: {
          changerTheme: (state) => {
               state.darkMode = !state.darkMode;
          },
     },
});

export const { changerTheme } = themeSlice.actions;

export const ThemeValue = (state) => state.themeMode.darkMode;

export default themeSlice.reducer;
