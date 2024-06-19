import {combineReducers} from 'redux';
import { RealEstateAppReducers } from './E-ReactEstateReducers';

const rootReducer = combineReducers({
  properties:RealEstateAppReducers,
  favorites:RealEstateAppReducers
})
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
