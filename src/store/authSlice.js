import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isAuth: localStorage.getItem('isAuth') ? JSON.parse(localStorage.getItem('isAuth')) : false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuth = true;
        },
        logout: (state) => {
            state.isAuth = false;
        }
    }
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
