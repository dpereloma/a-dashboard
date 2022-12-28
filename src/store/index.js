import { configureStore } from '@reduxjs/toolkit';
import customizationReducer from './customizationReducer';
import { authReducer } from './authSlice';
import { chargePointsReducer } from './chargePointsSlice';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = configureStore({
    reducer: {
        customization: customizationReducer,
        auth: authReducer,
        chargePoints: chargePointsReducer
    }
});
const persister = 'Free';

export { store, persister };
