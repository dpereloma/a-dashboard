import { createSlice } from '@reduxjs/toolkit';

import { teamsItems } from 'views/pages/teams/Teams/Teams.utils';
import { chargingSitesItems } from '../views/pages/charging-sites/ChargingSites/ChargingSites.utils';

export const initialState = {
  chargingSites: chargingSitesItems,
};

export const chargingSitesSlice = createSlice({
  name: 'chargingSites',
  initialState,
  reducers: {
    addChargingSite: (state, action) => {
      state.chargingSites = [...state.chargingSites, action.payload];
    },
    removeChargingSite: (state, action) => {
      state.chargingSites = state.chargingSites.filter(
        ({ id }) => id !== action.payload,
      );
    },
  },
});

export const chargingSitesActions = chargingSitesSlice.actions;
export const chargingSitesReducer = chargingSitesSlice.reducer;
