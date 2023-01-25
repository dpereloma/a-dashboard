import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SessionToken } from '../features/auth/types';

export interface AuthSliceState {
  isAuthed: boolean;
  isStorageSynced: boolean;
  isLoading: boolean;
  session: SessionToken | null;
  user: {
    id: string;
    username: string;
  } | null;
}

const initialState: AuthSliceState = {
  isAuthed: false,
  isStorageSynced: false,
  isLoading: false,
  session: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSetLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    authSetState(state, action: PayloadAction<boolean>) {
      state.isAuthed = action.payload;
    },
    authSetStorageSynced(state, action: PayloadAction<boolean>) {
      state.isStorageSynced = action.payload;
    },
    authSetSession(state, action: PayloadAction<SessionToken | null>) {
      state.session = action.payload;
    },
    authSetUser(state, action: PayloadAction<AuthSliceState['user']>) {
      state.user = action.payload;
    },
    authClearState(state) {
      return { ...initialState, isStorageSynced: state.isStorageSynced };
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
