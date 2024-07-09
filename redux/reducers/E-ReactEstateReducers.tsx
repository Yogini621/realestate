import {
  RealEstateAppState,
  RealEstateAppActionTypes,
  FetchProperties,
  AddToFavorites,
  RemoveFavorires,
  RemoveAll,
  AddDraft,
  AddAddress,
  AddCustomer,
  RemoveCustomer,
  AddPrivacyPolicy,
  AddTermsAndConditions,
  AddPoliciesDraft,
  AddTermsDraft,
} from '../actions/actions';

const initialState: RealEstateAppState = {
  properties: [],
  favorites: [],
  drafts:[],
  address:[],
  customers:[],
  policies:[],
  terms:[],
  policyDraft:[],
  termsDraft:[]
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
    case AddCustomer:
      return {
        ...state,
        customers:[...state.customers,action.payload]
      }  
    case RemoveCustomer:
      const updatedCustomers = state.customers.filter(item => item.id !== action.payload)
      return {
        ...state,
        customers:updatedCustomers
      }
    case AddPrivacyPolicy:
      return {
        ...state,
        policies:[...state.policies,action.payload]
      }
    case AddTermsAndConditions:
      return {
        ...state,
        terms:[...state.terms,action.payload]
      }
    case AddPoliciesDraft:
      return {
        ...state,
        policyDraft:[...state.policyDraft,action.payload]
      } 
    case AddTermsDraft:
      return {
        ...state,
        termsDraft:[...state.termsDraft,action.payload]
      } 
    default:
      return state;
  }
};
