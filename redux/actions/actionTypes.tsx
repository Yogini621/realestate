import {
  AddDraft,
  AddToFavorites,
  FetchProperties,
  Property,
  RemoveAll,
  RemoveFavorires,
  Address,
  AddAddress
} from './actions';

export const fetchProperties = (properties: Property[]) => ({
  type: FetchProperties,
  payload: properties,
});

export const addToFavorites = (item:Property) => ({
  type: AddToFavorites,
  payload: item,
});

export const removeFavorites = (item:Property) => ({
  type: RemoveFavorires,
  payload: item,
});

export const removeAllFromFavorites = () => ({
  type:RemoveAll,
})
export const addDraft = (item:Property) => ({
  type:AddDraft,
  payload:item
})
export const addAddress = (address:Address) => ({
  type:AddAddress,
  payload:address
})