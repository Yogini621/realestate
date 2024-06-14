import {combineReducers} from 'redux';
import { RealEstateAppReducers } from './E-ReactEstateReducers';

const rootReducer = combineReducers({
  properties:RealEstateAppReducers
})
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
