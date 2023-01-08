import { createSlice } from '@reduxjs/toolkit';

import config from '../config';

export const initialState = {
  isOpen: [],
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
};

export const customizationSlice = createSlice({
  name: 'customization',
  initialState,
  reducers: {},
});

export const customizationActions = customizationSlice.actions;
export const customizationReducer = customizationSlice.reducer;
