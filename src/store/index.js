import { configureStore } from '@reduxjs/toolkit';
import customizationReducer from './customizationReducer';
import { authReducer } from './authSlice';
import { chargePointsReducer } from './chargePointsSlice';
import { teamsReducer } from './teamsSlice';
import { chargingSitesReducer } from './chargingSItesSlice';

const store = configureStore({
  reducer: {
    customization: customizationReducer,
    auth: authReducer,
    chargePoints: chargePointsReducer,
    teams: teamsReducer,
    chargingSites: chargingSitesReducer,
  },
});

export { store };
