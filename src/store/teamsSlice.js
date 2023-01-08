import { createSlice } from '@reduxjs/toolkit';

import { teamsItems } from 'views/pages/teams/Teams/Teams.utils';

export const initialState = {
  teams: teamsItems,
};

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    addTeam: (state, action) => {
      state.teams = [...state.teams, action.payload];
    },
    removeTeam: (state, action) => {
      state.teams = state.teams.filter(({ id }) => id !== action.payload);
    },
  },
});

export const teamsActions = teamsSlice.actions;
export const teamsReducer = teamsSlice.reducer;
