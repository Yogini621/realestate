import {RealEstateAppState ,RealEstateAppActionTypes, FetchProperties} from "../actions/actions";

const initialState:RealEstateAppState = {
properties:[]
}

export const RealEstateAppReducers = (state=initialState,action:RealEstateAppActionTypes):RealEstateAppState => {
 switch(action.type){
 case FetchProperties : 
 return {...state,properties:action.payload}

 default :return state
 }
}