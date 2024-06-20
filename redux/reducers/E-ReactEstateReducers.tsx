import {
  RealEstateAppState,
  RealEstateAppActionTypes,
  FetchProperties,
  AddToFavorites,
  RemoveFavorires,
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
    case RemoveFavorires:
      const updatedItems = state.favorites.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        favorites:updatedItems

      }
    default:
      return state;
  }
};
