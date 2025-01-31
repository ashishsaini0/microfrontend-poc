import { combineReducers } from 'redux';
import { authReducer } from './authReducers';



export const allReducers = combineReducers({
  auth:authReducer,
  
});
const rootReducer = (state:any, action:any) => {
  if (action.type === "undefined") {
    return allReducers(undefined, action);
  }
  return allReducers(state, action);
};

export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;