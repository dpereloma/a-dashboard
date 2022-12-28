import { createSlice } from '@reduxjs/toolkit';

import { chargePointsItems } from 'views/pages/charge-points/ChargePoints/ChargePoints.utils';

export const initialState = {
    chargePoints: chargePointsItems
};

export const chargePointsSlice = createSlice({
    name: 'chargePoints',
    initialState,
    reducers: {
        addChargePoint: (state, action) => {
            state.chargePoints = [...state.chargePoints, action.payload];
        }
    }
});

export const chargePointsActions = chargePointsSlice.actions;
export const chargePointsReducer = chargePointsSlice.reducer;
