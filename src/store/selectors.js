import { createSelector } from 'reselect';

const selectSelf = (state) => state;

export const getIsAuth = createSelector(selectSelf, (state) => state.auth.isAuth);
