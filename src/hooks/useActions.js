import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { customizationSlice } from 'store/customizationSlice';
import { authReducer } from 'store/authSlice';

const actions = {
  ...customizationSlice,
  ...authReducer,
};
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
