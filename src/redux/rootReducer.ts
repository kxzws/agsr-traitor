import { combineReducers } from 'redux';
import authReducer from './auth/slices';
import servicesReducer from './services/slices';

const rootReducer = combineReducers({
  auth: authReducer,
  services: servicesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
