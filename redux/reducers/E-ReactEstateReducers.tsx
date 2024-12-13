import {
  RealEstateAppState,
  RealEstateAppActionTypes,
  FetchProperties,
  AddToFavorites,
} from '../actions/actions';

const initialState: RealEstateAppState = {
  properties: [],
  favorites: [],
};

export const RealEstateAppReducers = (
  state = initialState,
  action: RealEstateAppActionTypes,
): RealEstateAppState => {
  switch (action.type) {
    case FetchProperties:
      return {
        ...state,
        properties: action.payload,
      };
    case AddToFavorites:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    default:
      return state;
  }
};
