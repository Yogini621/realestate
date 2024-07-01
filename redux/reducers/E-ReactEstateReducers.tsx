import {
  RealEstateAppState,
  RealEstateAppActionTypes,
  FetchProperties,
  AddToFavorites,
  RemoveFavorires,
  RemoveAll,
  AddDraft,
  AddAddress,
} from '../actions/actions';

const initialState: RealEstateAppState = {
  properties: [],
  favorites: [],
  drafts:[],
  address:[]
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
      const updatedItems = state.favorites.filter(
        item => item !== action.payload,
      );
      return {
        ...state,
        favorites: updatedItems,
      };
    case RemoveAll:
      return {
        ...state,
        favorites:[]
      }
    case AddDraft:
      return {
        ...state,
        drafts:[...state.drafts,action.payload]
      }
    case AddAddress:
      return {
        ...state,
        address:[...state.address,action.payload]
      }
      
    default:
      return state;
  }
};
